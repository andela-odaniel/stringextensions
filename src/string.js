"use strict";

/**
 * Tests if the string contains vowels
 * 
 * @returns {Boolean}
 */
String.prototype.hasVowels = () => {

    const matchRegex = new RegExp("[aeiou]","i");
    return matchRegex.test(this);

};
