import { expect, test } from "vitest";

/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 */
const reverseWords = (string) => {
    let stringWithoutSpaces = "";
    let prevChar = "";

    for (let char of string) {
        if (char === " " && prevChar === " ") {
            continue;
        }

        if (char === " " && prevChar !== " ") {
            stringWithoutSpaces = stringWithoutSpaces + char;
            prevChar = char;
        }

        if (char !== " ") {
            prevChar = char;
        }

        if (char !== " ") {
            stringWithoutSpaces = stringWithoutSpaces + char;
        }
    }

    console.log(`>>>> "${stringWithoutSpaces}"`);

    const array = stringWithoutSpaces.trim().split(' ');
    const reversedArray = array.reverse();

    let outputString = "";
    let word = "";
    for (word of reversedArray) {
        if (outputString == "") {
            outputString = word.trim();
        }
        else {
            outputString = outputString + " " + word.trim();
        }
    }
    return outputString;
}

test('should reverse the order of the words', () => {
    expect(reverseWords('hello world')).toBe('world hello');
    expect(reverseWords('hello hi there')).toBe('there hi hello');
    expect(reverseWords('   hello   hi   there  ')).toBe('there hi hello');
})

