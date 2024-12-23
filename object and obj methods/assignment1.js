const person = {
    name: "milugo",
    age: 27,
    sayHello: function() {
        console.log("hello " + this.name + " youre " + this.age);

    }
}


const student = {
    enrolled: function(person) {
        console.log("enrolled into math comp");

    }
}

const StudentPerson = {
    ...person,
    ...student,
}

StudentPerson.enrolled();

for (let key in person) {
    console.log(key, ":", person[key]);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(StudentPerson));
console.log(Object.create(person));