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