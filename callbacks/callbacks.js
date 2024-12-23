function greet(name, callback, callback2) {
    console.log('Hello, ' + name);
    callback();

    callback2();
}

function sayGoodbye() {
    console.log('Goodbye!');
}


function sayGoodbye2() {
    console.log("bye 2");
}


greet('John', sayGoodbye, sayGoodbye2);