import { describe, expect, test } from 'vitest'

test('Data types', () => {
  const integerNumber = 42;
  const floatNumber = 42.6;
  const myBoolean = true;
  const myString = "bar";

  const arrayObject = ["Saab", "Volvo", "BMW"];
  expect(arrayObject[0]).toBe("Saab");

  const myObject = { firstName: "John", lastName: "Doe" };
  expect(myObject.firstName).toBe("John");

  const date = new Date("2022-03-25");

  let myUndefined; // value and type are undefined
  expect(typeof myUndefined).toBe("undefined");
})

test('operators', () => {
  // equality VS strict equality
  expect('1' == 1).toBe(true);
  expect('1' === 1).toBe(false);

  expect(0 == false).toBe(true);
  expect(0 === false).toBe(false);
})

describe('Loops and iteration', () => {
  test('for statement', () => {
    let counter = 0;

    for (let step = 0; step < 5; step++) {
      counter++;
    }

    expect(counter).toBe(5);
  })

  test('do...while statement', () => {
    let counter = 0;
    do {
      counter++
    } while (counter < 5);

    expect(counter).toBe(5);
  })

  test('while statement', () => {
    let counter = 0;
    while (counter < 5) {
      counter++;
    }

    expect(counter).toBe(5);
  })

  test('break statement', () => {
    let counter = 0;
    while (counter < 5) {
      counter++;
      if (counter === 3) {
        break;
      }
    }

    expect(counter).toBe(3);
  })

  test('for...in statement', () => {
    let counter = 0;
    const obj = { a: 1, b: 2, c: 3, d: 4 };

    for (const i in obj) {
      counter++;
    }

    expect(counter).toBe(4);
  })


  test('for...of statement', () => {
    let counter = 0;
    const iterable = [1, 2, 3, 4, 5];

    for (const i of iterable)
      counter++;

    expect(counter).toBe(5);
  })
})

describe('Functions', () => {
  test('Declaration', () => {
    function multiply(x, y) {
      return x * y;
    }

    expect(multiply(3, 2)).toBe(6);
  })

  test('Arrow function', () => {
    const multiply = (x, y) => x * y;

    expect(multiply(3, 2)).toBe(6);
  })
})

describe('Classes', () => {
  test('Declaration', () => {
    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }

      calcArea() {
        return this.height * this.width;
      }
    }

    const square = new Rectangle(10, 10);
    expect(square.calcArea()).toBe(100);
  })

  test('Inheritance', () => {
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        return `${this.name} makes a noise.`;
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
      }

      speak() {
        return `${this.name} barks.`;
      }
    }

    const animal = new Animal("animal");
    expect(animal.speak()).toBe("animal makes a noise.");

    const dog = new Dog("Rex");
    expect(dog.speak()).toBe("Rex barks.");
  })
})

describe('Asynchronous code', () => {
  test('Async function', async () => {
    async function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('data received');
        }, 200); // Simulates a 0.2-second delay
      });
    }

    const result = await fetchData();

    expect(result).toBe('data received');
  })
})
