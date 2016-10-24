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
