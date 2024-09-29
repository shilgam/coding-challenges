import { assert, describe, expect, test } from 'vitest'

test('LexicalEnvironment and Closure', () => {
    /* Лексическое Окружение (EN: LexicalEnvironment)
     *    - Это внутренний (скрытый) объект, который есть у каждой функции, блока кода {...} в JS.
     *    - Этот объект состоит из:
     *        - Environment Record – объект, в котором хранятся все локальные переменные (и другая инфа, как значение this).
     *        - Ссылка на внешнее лексическое окружение – т.е. то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).
     *
     * Замыкание (EN: Closure) – в программировании: это функция, которая запоминает свои внешние переменные и может получить к ним доступ.
     *     - Все функции в JS являются замыканиями (Т.е., помнят лексическое окружение, в котором они были созданы.)
     *     - Технически здесь нет никакой магии: все функции имеют скрытое свойство [[Environment]],
     *       которое хранит ссылку на лексическое окружение, в котором была создана функция.
     *
     * SRC: https://learn.javascript.ru/closure
     */

    /**
     * Creates a counter function which returns the current count.
     */
    let makeCounter = () => {
        let count = 0;

        return () => {
            return count++;
        }
    }

    const counter = makeCounter();

    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
})

test('Sum with closures', () => {
    /**
     * Сумма с помощью замыканий
     */
    const sum = (a) => (b) => {
        return a + b;
    }

    expect(sum(3)(5)).toBe(8);
    expect(sum(3)(-5)).toBe(-2);
})

