"use strict";

/**
 * Tests if the string contains vowels
 * 
 * @returns {Boolean}
 */
<<<<<<< HEAD
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
        lowerCaseCharacters
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
=======
Object.defineProperty(String.prototype, "hasVowels", {
    value () {

        const matchRegex = new RegExp("[aeiou]","i");
        return matchRegex.test(this);

    }
});
>>>>>>> 894d755c5bb9fce0b8d254cafca9fcd9e144c560
