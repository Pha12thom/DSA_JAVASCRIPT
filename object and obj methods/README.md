

### JavaScript Objects and Methods

#### 1. **Introduction to JavaScript Objects**

**Objects** are collections of properties. Each property is a key-value pair. 

**Creating an Object:**
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
```

**Accessing Object Properties:**
```javascript
console.log(person.firstName); // John
console.log(person['lastName']); // Doe
```

**Adding/Updating Properties:**
```javascript
person.email = 'john.doe@example.com'; // Adding a new property
person.age = 31; // Updating an existing property
```

**Deleting Properties:**
```javascript
delete person.email;
```

#### 2. **Object Methods**

**Defining Methods in Objects:**
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName()); // John Doe
```

**Shorthand Method Syntax:**
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
```

#### 3. **The `this` Keyword**

`this` refers to the object that is executing the current function.
```javascript
const person = {
    name: 'Alice',
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(person.greet()); // Hello, my name is Alice
```

#### 4. **Object Constructor**

**Creating Objects with a Constructor Function:**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        return `Hello, my name is ${this.name}`;
    };
}

const person1 = new Person('Bob', 25);
console.log(person1.sayHello()); // Hello, my name is Bob
```

**Using the `class` Syntax:**
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello, my name is ${this.name}`;
    }
}

const person2 = new Person('Charlie', 35);
console.log(person2.sayHello()); // Hello, my name is Charlie
```

#### 5. **Object Properties**

**Enumerating Properties:**
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
// Output: firstName: John, lastName: Doe, age: 30
```

**Object.keys() and Object.values():**
```javascript
console.log(Object.keys(person)); // [ 'firstName', 'lastName', 'age' ]
console.log(Object.values(person)); // [ 'John', 'Doe', 30 ]
```

**Object.entries():**
```javascript
console.log(Object.entries(person));
// [ ['firstName', 'John'], ['lastName', 'Doe'], ['age', 30] ]
```

#### 6. **Object Destructuring**

**Destructuring Objects:**
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const { firstName, age } = person;
console.log(firstName); // John
console.log(age); // 30
```

**Renaming Variables:**
```javascript
const { firstName: fName, age: years } = person;
console.log(fName); // John
console.log(years); // 30
```

#### 7. **Object Spread and Rest**

**Using Spread Operator:**
```javascript
const person = { firstName: 'John', lastName: 'Doe' };
const contact = { phone: '123-456-7890', email: 'john.doe@example.com' };
const personWithContact = { ...person, ...contact };
console.log(personWithContact);
// { firstName: 'John', lastName: 'Doe', phone: '123-456-7890', email: 'john.doe@example.com' }
```

**Using Rest Operator in Function Parameters:**
```javascript
function printDetails(name, ...details) {
    console.log(name);
    console.log(details);
}

printDetails('John', 'Doe', 30, 'Engineer');
// Output: John, [ 'Doe', 30, 'Engineer' ]
```

#### 8. **Object Prototypes**

**Prototypal Inheritance:**
```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};

const person = new Person('John');
console.log(person.greet()); // Hello, my name is John
```

#### 9. **Object.freeze() and Object.seal()**

**Freezing an Object:**
```javascript
const person = { name: 'John', age: 30 };
Object.freeze(person);
person.age = 31; // This will not be allowed
```

**Sealing an Object:**
```javascript
const person = { name: 'John', age: 30 };
Object.seal(person);
person.age = 31; // This is allowed
delete person.age; // This is not allowed
```

### Practice Problems

1. **Create a Person Object**: Create a `Person` object with properties `name`, `age`, and a method `sayHello()` that returns a greeting message.

2. **Extend a Person Object**: Create an object `Student` that extends `Person` and adds an `enroll()` method.

3. **Object Manipulation**: Given an object with various properties, use `Object.keys()`, `Object.values()`, and `Object.entries()` to explore and manipulate the object.

4. **Prototypal Inheritance**: Create a base object `Vehicle` and extend it with a `Car` object that adds additional properties and methods.

5. **Destructuring Challenge**: Given a nested object, use object destructuring to extract and rename specific properties.

