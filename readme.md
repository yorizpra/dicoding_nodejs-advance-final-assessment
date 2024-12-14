# Dicoding Node.js Advanced Final Assessment

This repository contains the final assessment tasks for the Dicoding Node.js Advanced course. Follow the instructions below to clone the repository and complete each task.

## Clone the Repository

```sh
git clone https://github.com/yorizpra/dicoding_nodejs-advance-final-assessment.git
cd dicoding_nodejs-advance-final-assessment
```

## Task 01: Writing Comments
Instructions
1. Open the index.js file in the 01-writing-comments directory.
2. Add your Dicoding username as a single-line comment.
3. Add the following text as a multi-line comment:
```sh
Goal tahun ini:
1. Belajar JavaScript.
2. Menjadi Front-End atau Back-End Developer.
```
Example
```sh
// yorizpra
/*
Goal tahun ini:
1. Belajar JavaScript.
2. Menjadi Front-End atau Back-End Developer.
*/
```

## Task 02: Code Style
Instructions
1. Open the index.js file in the 02-code-style directory.
2. Fix the code style according to the following rules:
    - End each statement with a semicolon ;.
    - Use 2 spaces for indentation.
    - Use const for variables that are not reassigned.
    - Add spaces between { } and property names defined in a single line.
Example
```sh
const books = {};

function getBooks() {
  return books;
}

function getBookById(id) {
  const book = books[id];

  if (!book) {
    return null;
  }

  return book.id;
}

function saveBook(book) {
  books[book.id] = book;
}

saveBook({ id: 'book-1', name: 'Book 1' });
const myBooks = getBooks();
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);
```

## Task 03: Writing Tests
Instructions
1. Open the index.js file in the 03-writing-test directory and understand the sum function.
2. Open the index.test.js file and write tests for the sum function using bun:test.
Example
```sh
import { describe, expect, test } from 'bun:test';
import { sum } from './index.js';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('adds 1.5 + 2.5 to equal 4', () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });
});
```

## Task 04: OOP - Inventory Management System
Instructions
1. Open the Inventory.js file in the optional-04-oop directory.
2. Complete the Inventory class with the following methods:
    - addItem(item): Adds an item to the items array.
    - removeItem(id): Removes an item from the items array by id.
    - listItems(): Returns a string with detailed information about each item.
Example
```sh
class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  listItems() {
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

export default Inventory;
```

and so on...

## Additional Information
Refer to the instruksi.md files in each directory for more detailed instructions on completing each task.