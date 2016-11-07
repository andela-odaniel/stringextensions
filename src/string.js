"use strict";

/**
 * Tests if the string contains vowels
 * 
 * @returns {Boolean}
 */
Object.defineProperty(String.prototype, "hasVowels", {
    value () {

        return /[aeiou]/ig.test(this);

    }
});
