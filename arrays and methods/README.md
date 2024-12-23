
# DSA_JAVASCRIPT README

## Array Creation and Manipulation

1. **`push(element1, ..., elementN)`**
    - Adds one or more elements to the end of an array and returns the new length of the array.

    ```javascript
    let arr = [1, 2, 3];
    arr.push(4); // arr is now [1, 2, 3, 4]
    ```

2. **`pop()`**
    - Removes the last element from an array and returns that element.

    ```javascript
    let arr = [1, 2, 3, 4];
    arr.pop(); // arr is now [1, 2, 3]
    ```

3. **`shift()`**
    - Removes the first element from an array and returns that element.

    ```javascript
    let arr = [1, 2, 3];
    arr.shift(); // arr is now [2, 3]
    ```

4. **`unshift(element1, ..., elementN)`**
    - Adds one or more elements to the beginning of an array and returns the new length of the array.

    ```javascript
    let arr = [2, 3];
    arr.unshift(1); // arr is now [1, 2, 3]
    ```

5. **`splice(start, deleteCount, item1, ..., itemN)`**
    - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

    ```javascript
    let arr = [1, 2, 3, 4];
    arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]
    ```

## Array Access and Information

6. **`concat(array1, ..., arrayN)`**
    - Merges two or more arrays and returns a new array.

    ```javascript
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let merged = arr1.concat(arr2); // merged is [1, 2, 3, 4]
    ```

7. **`slice(start, end)`**
    - Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).

    ```javascript
    let arr = [1, 2, 3, 4];
    let sliced = arr.slice(1, 3); // sliced is [2, 3]
    ```

8. **`indexOf(searchElement, fromIndex)`**
    - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

    ```javascript
    let arr = [1, 2, 3, 2];
    arr.indexOf(2); // returns 1
    ```

9. **`lastIndexOf(searchElement, fromIndex)`**
    - Returns the last index at which a given element can be found in the array, or -1 if it is not present.

    ```javascript
    let arr = [1, 2, 3, 2];
    arr.lastIndexOf(2); // returns 3
    ```

## Iteration Methods

10. **`forEach(callback(currentValue, index, array))`**
     - Executes a provided function once for each array element.

     ```javascript
     let arr = [1, 2, 3];
     arr.forEach(item => console.log(item)); // logs 1, 2, 3
     ```

11. **`map(callback(currentValue, index, array))`**
     - Creates a new array populated with the results of calling a provided function on every element in the calling array.

     ```javascript
     let arr = [1, 2, 3];
     let squared = arr.map(x => x * x); // squared is [1, 4, 9]
     ```

12. **`filter(callback(currentValue, index, array))`**
     - Creates a new array with all elements that pass the test implemented by the provided function.

     ```javascript
     let arr = [1, 2, 3, 4];
     let even = arr.filter(x => x % 2 === 0); // even is [2, 4]
     ```

13. **`reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)`**
     - Executes a reducer function on each element of the array, resulting in a single output value.

     ```javascript
     let arr = [1, 2, 3, 4];
     let sum = arr.reduce((acc, x) => acc + x, 0); // sum is 10
     ```

14. **`reduceRight(callback(accumulator, currentValue, currentIndex, array), initialValue)`**
     - Applies a function against an accumulator and each value of the array (from right to left) to reduce it to a single value.

     ```javascript
     let arr = [1, 2, 3, 4];
     let sum = arr.reduceRight((acc, x) => acc + x, 0); // sum is 10
     ```

## Searching and Testing

15. **`find(callback(element, index, array))`**
     - Returns the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

     ```javascript
     let arr = [1, 2, 3, 4];
     let found = arr.find(x => x > 2); // found is 3
     ```

16. **`findIndex(callback(element, index, array))`**
     - Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.

     ```javascript
     let arr = [1, 2, 3, 4];
     let index = arr.findIndex(x => x > 2); // index is 2
     ```

17. **`some(callback(element, index, array))`**
     - Tests whether at least one element in the array passes the test implemented by the provided function. Returns a Boolean value.

     ```javascript
     let arr = [1, 2, 3, 4];
     let hasEven = arr.some(x => x % 2 === 0); // hasEven is true
     ```

18. **`every(callback(element, index, array))`**
     - Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean value.

     ```javascript
     let arr = [1, 2, 3, 4];
     let allEven = arr.every(x => x % 2 === 0); // allEven is false
     ```

## Utility Methods

19. **`includes(valueToFind, fromIndex)`**
     - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

     ```javascript
     let arr = [1, 2, 3];
     arr.includes(2); // returns true
     ```

20. **`join(separator)`**
     - Joins all elements of an array into a string and returns this string.

     ```javascript
     let arr = ['a', 'b', 'c'];
     let str = arr.join('-'); // str is 'a-b-c'
     ```

21. **`reverse()`**
     - Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

     ```javascript
     let arr = [1, 2, 3];
     arr.reverse(); // arr is now [3, 2, 1]
     ```

22. **`sort(compareFunction)`**
     - Sorts the elements of an array in place and returns the array. The default sort order is ascending.

     ```javascript
     let arr = [3, 1, 2];
     arr.sort(); // arr is now [1, 2, 3]
     ```
     ## Advanced Array Methods

     23. **`flat(depth)`**
          - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

          ```javascript
          let arr = [1, [2, [3, [4]]]];
          let flatArr = arr.flat(2); // flatArr is [1, 2, 3, [4]]
          ```

     24. **`flatMap(callback(element, index, array))`**
          - First maps each element using a mapping function, then flattens the result into a new array.

          ```javascript
          let arr = [1, 2, 3];
          let flatMapped = arr.flatMap(x => [x, x * 2]); // flatMapped is [1, 2, 2, 4, 3, 6]
          ```

     25. **`fill(value, start, end)`**
          - Fills all the elements of an array from a start index to an end index with a static value.

          ```javascript
          let arr = [1, 2, 3];
          arr.fill(0, 1, 2); // arr is now [1, 0, 3]
          ```

     Here's a broader example of using these advanced array methods:

     ```javascript
     let nestedArray = [1, [2, [3, [4]]]];

     // Using flat to flatten the nested array
     let flattenedArray = nestedArray.flat(Infinity);
     console.log(flattenedArray); // Output: [1, 2, 3, 4]

     // Using flatMap to double each element in the array
     let doubledArray = flattenedArray.flatMap(x => [x, x]);
     console.log(doubledArray); // Output: [1, 1, 2, 2, 3, 3, 4, 4]

     // Using fill to replace elements in the array
     doubledArray.fill(0, 2, 6);
     console.log(doubledArray); // Output: [1, 1, 0, 0, 0, 0, 4, 4]
     ```

     These advanced array methods provide powerful functionality for manipulating and transforming arrays in JavaScript.
     ```
