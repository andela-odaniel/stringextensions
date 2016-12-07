"use strict";

/**
 * Tests if the string contains vowels
 * 
 * @returns {Boolean}
 */
String.prototype.hasVowels = function () {
    return /[aeiou]/i.test(this);
};

/**
 * Returns an upper case only version of the string
 * 
 * @returns {String}
 */
String.prototype.toUpper = function () {
    return this.replace(/[a-z]/g, (match, index) => {
        return String.fromCharCode(this.charCodeAt(index) - 32);
    });
};

/**
 * Converts the string to solely lower case
 * 
 * @returns {String}
 */
String.prototype.toLower = function () {
    return this.replace(/[A-Z]/g, (match, index) => {
        return String.fromCharCode(this.charCodeAt(index) + 32);
    });
};

/**
 * Makes the first character of the string upper case if it isn't
 * 
 * @returns {String}
 */
String.prototype.ucFirst = function () {
    return this.replace(/^[a-z]/,(match) => {
        return match.toUpper();
    });
};

/**
 * Checks if the string contains a question
 * 
 * @returns {Boolean}
 */
String.prototype.isQuestion = function () {
    return /\?$/.test(this);
};

/**
 * Gets the words contained in the string
 * 
 * @returns {Array}
 */
String.prototype.words = function () {
    return this.match(/(\w+)/g);
};

/**
 * Gets the number of words contained in the string
 * 
 * @returns {Number}
 */
String.prototype.wordCount = function () {
    return this.words().length;
};

/**
 * Formats the given number as currency 
 * 
 * @returns {String}
 */
String.prototype.toCurrency = function () {
    return this.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");
};

/**
 * Formats the given currency string as numerical 
 * 
 * @returns {String}
 */
String.prototype.fromCurrency = function () {
    return Number(this.replace(/[,]/g,""));
};

/**
 * Returns a version of the string with the cases inverted 
 * 
 * @returns {String}
 */
String.prototype.inverseCase = function () {
    return this.replace(/[A-Za-z]/g, (matched) => {
        return /[A-Z]/g.test(matched) ? matched.toLower() : matched.toUpper();
    });
};

/**
 * Returns a version of the string where the cases alternate per character 
 * 
 * @returns {String}
 */
String.prototype.alternatingCase = function () {
    return this.replace(/[A-Za-z]/g,(matched,index) => {
        return index % 2 ? matched.toUpper() : matched.toLower();
    });
};

/**
 * Returns the middle character(s) of the string 
 * 
 * @returns {String}
 */
String.prototype.getMiddle = function () {
    //if string is just one character return that character 
    if (this.length === 1) return this[0];

    //split string into two
    const regex = new RegExp(`.{${ ~~(this.length / 2) }}`,"g"),
        matches = this.match(regex);

    /** 
     * if of even length return last letter of first match and first letter of second
     * else return just the first letter of the second match
     */
    return this.length % 2 ? matches[1][0] : matches[0][matches[0].length - 1] + matches[1][0];
};

/**
 * Returns a string representation of a number * 
 * @returns {String}
 */
String.prototype.numberWords = function () {
    const codex = ["zero","one","two","three","four",
        "five", "six", "seven", "eight","nine"];
    return this.replace(/[0-9]/g,(matched) => {
        return `${codex[matched]} `;
    }).trim();
};

/**
 * Checks if the string is a single digit
 * @returns {Boolean}
 */
String.prototype.isDigit = function () {
    return /\d/.test(this) ? this.match(/\d/g).length === 1 : false;
};

/**
 * Checks if the string contains two characters repeated
 * next to each other 
 * 
 * @returns {String}
 */
String.prototype.doubleCheck = function () {
    return /(.)\1/.test(this);
};
