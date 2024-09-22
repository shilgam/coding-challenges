import { describe, expect, test } from 'vitest'

describe('Simple examples', () => {
    test('Interface', () => {
        interface Person {
            name: string;
            age: number;
        }

        function greet(person: Person) {
            return "Hello " + person.name;
        }

        let person1: Person = { name: "Olga", age: 20 };

        expect(greet(person1)).toBe('Hello Olga');
    })
  })
