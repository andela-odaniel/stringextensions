"use strict";

/**
 * Tests if the string contains vowels
 * 
 * @returns {Boolean}
 */
Object.defineProperty(String.prototype, "hasVowels", {
    value () {

        const matchRegex = new RegExp("[aeiou]","i");
        return matchRegex.test(this);

    }
});

/**
 * Tests if the string contains vowels
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "toUpper", {
    value () {

        let input = this;
        const matchRegex = /[a-z]/g,
            lowerCaseCharacters = input.match(matchRegex);

        if (lowerCaseCharacters) {

            //remove duplicates
            lowerCaseCharacters
                .filter((character,index) => {

                    return lowerCaseCharacters.indexOf(character) === index;

                })
                .map((character) => {

                    const asciiValue = character.charCodeAt(0),
                        //there's a distance of 32 characters between upper case and lower case ascii characters
                        upperCaseAsciiValue = asciiValue - 32,
                        uppercaseStringValue = String.fromCharCode(upperCaseAsciiValue);
                        //replace all occurences of the lower case character with the upper case
                    input = input.replace(new RegExp(character,"g"),uppercaseStringValue);

                });

        }

        return input;

    }
});

/**
 * Converts the string to solely lower case
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "toLower", {
    value () {

        let input = this;
        const matchRegex = /[A-Z]/g,
            upperCaseCharacters = input.match(matchRegex);

        if (upperCaseCharacters) {

            //remove duplicates
            upperCaseCharacters
                .filter((character,index) => {

                    return upperCaseCharacters.indexOf(character) === index;

                })
                .map((character) => {

                    const asciiValue = character.charCodeAt(0),
                        //there's a distance of 32 characters between upper case and lower case ascii characters
                        lowerCaseAsciiValue = asciiValue + 32,
                        lowerCaseStringValue = String.fromCharCode(lowerCaseAsciiValue);
                        //replace all occurences of the character with the lower case
                    input = input.replace(new RegExp(character,"g"),lowerCaseStringValue);

                });

        }

        return input;

    }
});

/**
 * Makes the first character of the string upper case if it isn't
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "ucFirst", {
    value () {

        return this.replace(/^[a-z]/, (match) => {

            return match.toUpper();

        });

    }
    
});
