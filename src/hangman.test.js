
import { generateHangmanLetters } from "./hangman.js";
import { test, expect } from "@jest/globals";

test("input containing some correct letters", () => {
    const guessedLetters = ["u", "e", "a", "m", "d", "y"];
    const wordToGuess = "mandarin";
    const result = ["m", "a", "_", "d", "a", "_", "_", "_"]
    expect(generateHangmanLetters(guessedLetters, wordToGuess)).toEqual(result);
});

test("no guessed letters", () => {
    const guessedLetters = [];
    const wordToGuess = "test";
    const result = ["_", "_", "_", "_"]
    expect(generateHangmanLetters(guessedLetters, wordToGuess)).toEqual(result);
});

test("input with some correct letters", () => {
    const guessedLetters = ["G", "f", "h", "P"];
    const wordToGuess = "frogs";
    const result = ["f", "_", "_", "g", "_"]
    expect(generateHangmanLetters(guessedLetters, wordToGuess)).toEqual(result);
});

test("input with some correct letters", () => {
    const guessedLetters = ["g", "e", "y", "s", "m"];
    const wordToGuess = "speed";
    const result = ["s", "_", "e", "e", "_"]
    expect(generateHangmanLetters(guessedLetters, wordToGuess)).toEqual(result);
});

test("input with some correct letters", () => {
    const guessedLetters = ["t", "g", "l", "u", "o", "a"];
    const wordToGuess = "total";
    const result = ["t", "o", "t", "a", "l"]
    expect(generateHangmanLetters(guessedLetters, wordToGuess)).toEqual(result);
});
