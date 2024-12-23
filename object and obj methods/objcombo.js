function printDetails(name, ...details) {
    console.log(name);
    console.log(details);
}

printDetails('John', 'Doe', 30, 'Engineer', 977);


const person = {
    firstName: 'John',
    lastName: 'Doe'
};
const contact = {
    phone: '123-456-7890',
    email: 'john.doe@example.com'
};
const personWithContact = {
    ...person,
    ...contact
};
console.log(personWithContact);