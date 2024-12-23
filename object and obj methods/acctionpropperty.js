const person = {
    firstname: "milugo",
    secondname: "geofrey",
    age: 27,
    fullname: function() {
        return this.firstname + this.secondname + "@gmail.com";
    }

};

person.email = "johndoe@gmail.com";
console.log(person.firstname);
console.log(person.email);
console.log(person["email"]);
console.log(person.fullname());