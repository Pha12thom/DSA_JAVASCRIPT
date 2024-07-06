//DAY 2 iteration methods
var people = ["geofrey", "ian", "peter", "joan"];
people.forEach(person => console.log(person));
people.forEach(
    function Person(person) {
        console.log(person.slice());
    }
);

var lastLetters = people.map(person => person.slice(-1));
console.log(lastLetters);

var firstLetters = people.map(person => person[0]);
console.log(firstLetters);


const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
        return total / array.length;
    } else {
        return total;
    }
});