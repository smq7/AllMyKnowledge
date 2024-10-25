# Objects and functions

## Write functions for working objects

## Before we start

1. This practical task is verified automatically with tests.
2. Please, put all your `JavaScript` code in the `src/script.js` and `HTML` code in the `src/index.html` files. Functions from `src/script.js` are used in the `<script>` inside `src/index.html`. If you use any other file, we would not be able to verify it.
3. Please, don't change the page structure, if it is not required for a task. It may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Run JavaScript code in RunJS application

`RunJS` is a JavaScript and TypeScript playground for desktop operating systems. It runs code as it's written and displays formatted results in the output panel on the right.

![RunJS application in work](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/images/runjs-intro.png)

RunJS is available on macOS, Windows, and Linux operating systems.

Here are detailed instructions how to install and use it: [RunJS documentation](https://runjs.app/docs).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Write functions for working with objects. Requirements are below.

Please, note you should edit the `src/script.js` file. We can't verify your solution if you use a different file.

For a function creation, it is mandatory to use `Function Declaration` or we will not be able to verify them. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Please, note:**

- If task requirement says: _Function should **return** <something>_, it means it should deliberately return expected value. If instead of returning a value, you will show it in the console, it will not pass the check. More about function returning a value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### Requirements for the functions

1. **Function "sumPrices"**

Write a function `sumPrices` for summing all finite values from object properties.

```js
function sumPrices(prices) {
  // your code...
}
```

This function takes one parameter:
`prices` - an object with any properties:

```js
let prices = {
  apples: 1000,
  oranges: 1600,
  cucumbers: 1300,
  month: "December",
  currency: "USD",
  health: Infinity,
  isPayed: false,
};
```

1. The function should sum all property values with number type (finite only) and return the sum.
2. Properties names are not fixed, there could be any string values.
3. Please, note that in addition to price properties, the object stores additional information:
   currency type (`currency`), salary paid or not (`isPayed`), and any others. We expect to receive the sum of properties with number(finite) type only, other properties should be ignored.
4. Special numeric values: `NaN`, `Infinity`, `-Infinity` should be excluded.
5. If `prices` object doesn't have properties with number type, the function should return zero(`0`).

**Example of a function usage:**

```js
let prices1 = {
  pineapples: 1100,
  lemons: 100,
  tomatoes: 700,
  Year: "1973",
  sun: "is shining",
  areAllNumbers: NaN,
  isPayed: false,
  from: Infinity,
  to: -Infinity,
};

let result1 = sumPrices(prices); // 1900 - a sum of all finite number values.

let result2 = sumPrices({}); // 0
```

2. **Function "createUserWithFullName"**

Write a function `createUserWithFullName` for creating an object with two properties: `firstName` and `lastName`, and methods: `setFirstName`, `setLastName` and `getFullName`.

You can use your function `createUser` from task `#1` as a starter.

```js
function createUserWithFullName(firstName, lastName) {
  // your code...
}
```

This function takes two parameters:
`firstName` - a string with the user's first name.
`lastName` - a string with the user's last name.

1. The function should create a new object and return it.
2. Returned object should have two properties: `firstName` and `lastName`. The values for properties should be from `firstName` and `lastName` parameters.
3. Returned object should have three methods:

`setFirstName(newFirstName)` - takes `newFirstName` as a parameter and sets its value to the `firstName` property of the object.

`setLastName(newLastName)` - takes `newLastName` as a parameter and sets its value to the `lastName` property of the object.

`getFullName()` - merges values from `firstName` and `lastName` properties adding a space between and returning the result. It should work the same way as `getFullName` function from previous task.

Please, note methods should use `this` inside.

**Example of function usage:**

```js
let user = createUserWithFullName("Stan", "Lee");

user.firstName; // 'Stan'
user.lastName; // 'Lee'

let fullName = user.getFullName(); // 'Stan Lee'

user.setFirstName("Will");
user.setLastName("Smith");

user.firstName; // 'Will'
user.lastName; // 'Smith'

let fullName = user.getFullName(); // 'Will Smith'
let emptyFullName = getFullName();
emptyFullName; // ""
```

3. The **Function "countLetters"**

Write the function `countLetters` to Function should count all the characters that occur in a string. The function takes a string as a parameter. For example, for the string 'abababa', the result should be { 'a': 4, 'b': 3 }
If a string is empty the result should be an empty object literal { }.

Hint.

```js
function countLetters(str) {
  // your code...
}
```

This function takes one parameter:
`str` - a character string

1. The function takes a string as a parameter.
2. The function should calculate how many times each letter occurs in a string.
3. The function should create an object, the properties will be letters, and the values will be numbers
4. The space character should be ignored.
5. The function should return an empty object {} if a string is not passed or string is empty.
