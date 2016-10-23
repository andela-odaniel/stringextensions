'use strict';

/**
 * Tests if the string contains vowels
 * 
 * @returns {Boolean}
 */
String.prototype.hasVowels = function() {
    const matchRegex = new RegExp('[aeiou]','i');
    return matchRegex.test(this);
};