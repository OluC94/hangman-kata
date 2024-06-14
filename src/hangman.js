/**
 * 
 * @param {string[]} inputArr 
 */


const makeArrayLowerCase = (inputArr) => {
    const outputArr = []
    for (let letter of inputArr){
        outputArr.push(letter.toLowerCase())
    }
    return outputArr;
}

/**
 * 
 * @param {string[]} guessedLetters
 * @param {string} wordToGuess
 * @returns {string[]} } guessedLetters 
 * 
 */
const generateHangmanLetters = (guessedLetters, wordToGuess) => {
    // check each index of wordtoguess, if there is a match in guessedletters, reveal that index in results
    
    const results = []
    const lowerCaseGuesses = makeArrayLowerCase(guessedLetters);

    for (let i = 0; i < wordToGuess.length; i++){
        const currentLetter = wordToGuess[i]
        if (lowerCaseGuesses.includes(currentLetter)){
            results.push(currentLetter)
        } else{
            results.push("_");
        } 
    }

    return results
};

export {generateHangmanLetters}

/*
Pseudocode

generateHangemanLetters(GUESSEDLETTERS, WORDTOGUESS)
    declare RESULTS = ["_", "_", "_", "_"]
    

    return RESULTS

*/