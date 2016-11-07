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
 * Returns an upper case only version of the string
 * 
 * @returns {Boolean}
 */
Object.defineProperty(String.prototype, "toUpper", {
    value () {

        return this.replace(/[a-z]/g, (match, index) => {

            return String.fromCharCode(this.charCodeAt(index) - 32);
        
        });

    }
});
