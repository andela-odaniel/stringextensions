'use strict';

/**
 * Tests if the string contains vowels
 * 
 * @returns {Boolean}
 */
String.prototype.hasVowels = function() {
    const matchRegex = /[aeiouAEIOU]/g;
    return matchRegex.test(this);
};

/**
 * Converts the string to solely upper case
 * 
 * @returns {String}
 */
String.prototype.toUpper = function() {
    let input = this;
    const matchRegex = /[a-z]/g;
    let lowerCaseCharacters = input.match(matchRegex);

    if(lowerCaseCharacters){
        //remove duplicates
        lowerCaseCharacters = lowerCaseCharacters
            .filter((character,index) => {
                return lowerCaseCharacters.indexOf(character) === index; 
            })
            .map((character) => {
                let asciiValue = character.charCodeAt(0),
                    //there's a distance of 32 characters between upper case and lower case ascii characters
                    upperCaseAsciiValue = asciiValue - 32,
                    uppercaseStringValue = String.fromCharCode(upperCaseAsciiValue);
                    //replace all occurences of the character with the upper case
                 input = input.replace(new RegExp(character,"g"),uppercaseStringValue);
        })
    }

    return input;
};


/**
 * Converts the string to solely upper case
 * 
 * @returns {String}
 */
String.prototype.toLower = function() {
    let input = this;
    const matchRegex = /[A-Z]/g;
    let upperCaseCharacters = input.match(matchRegex);

    if(upperCaseCharacters){
        //remove duplicates
        upperCaseCharacters
            .filter((character,index) => {
                return upperCaseCharacters.indexOf(character) === index; 
            })
            .map((character) => {
                let asciiValue = character.charCodeAt(0),
                    //there's a distance of 32 characters between upper case and lower case ascii characters
                    lowerCaseAsciiValue = asciiValue + 32,
                    lowerCaseStringValue = String.fromCharCode(lowerCaseAsciiValue);
                    //replace all occurences of the character with the lower case
                 input = input.replace(new RegExp(character,"g"),lowerCaseStringValue);
        })
    }

    return input;
};