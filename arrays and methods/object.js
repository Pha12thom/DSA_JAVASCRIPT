const vehicle = new Object();

function Car(brand, model) {
    this.brand = brand
    this.model = model
}

const car = {
    brand: {
        name: 'Ford',
        model: 'GT'
    },
    color: 'blue',
}

console.log(car.brand.model);

const mycar = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function() {
        console.log('Started')
    },
}

mycar.start()


const myvehicle = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function() {
        console.log(`Started ${this.brand} ${this.model}`)
    },
}

myvehicle.start()





name = "flavio";

class Person {
    constructor(name) {
        this.name = name
    }

    hello() {
        return 'Hello, I am ' + this.name + '.'
    }
}

class Programmer extends Person {
    hello() {
        return super.hello() + '. I am also a programmer.'
    }
}
const flavio = new Programmer('flavio')
flavio.hello()
console.log(flavio.hello());




class firstName {
    constructor(firstName) {
        this.firstName = firstName

    }
    hello() {
        return this.firstName + ' is my first name'
    }
}

const firstname = new firstName('geofrey')

console.log(firstname.hello())


class secondName extends firstName {
    constructor(firstName, secondName) {
        super(firstName)
        this.secondName = secondName

    }

    hello() {
        return super.hello() + '\t and\t' + this.secondName + ' is my second Name'
    }

}



const fullname = new secondName('milugo', 'geofrey')
console.log(fullname.hello());



setTimeout(() => {
    // runs after 2 seconds 
    console.log('inside the function')
}, 5000)


const getFirstUserData = () => {
    // get users list 
    return (
        fetch('/users.json')
        // parse JSON 
        .then((response) => response.json())
        // pick first user 
        .then((users) => users[0])
        // get user data 
        .then((user) => fetch(`/users/${user.name}`))
        // parse JSON 
        .then((userResponse) => userResponse.json())
    )
}
getFirstUserData()