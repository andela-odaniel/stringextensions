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

/**
 * Returns an upper case only version of the string
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "toUpper", {
    value () {

        return this.replace(/[a-z]/g, (match, index) => {

            return String.fromCharCode(this.charCodeAt(index) - 32);
        
        });

    }
});

/**
 * Converts the string to solely lower case
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "toLower", {
    value () {

        return this.replace(/[A-Z]/g, (match, index) => {

            return String.fromCharCode(this.charCodeAt(index) + 32);

        });

    }
});

/**
 * Makes the first character of the string upper case if it isn't
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "ucFirst", {
    value () {

        return this.replace(/^[a-z]/,(match) => {
    
            return match.toUpper();
        
        });

    }

});

/**
 * Checks if the string contains a question
 * 
 * @returns {Boolean}
 */
Object.defineProperty(String.prototype, "isQuestion", {
    value () {

        return /\?$/.test(this);

    }
});

/**
 * Gets the words contained in the string
 * 
 * @returns {Array}
 */
Object.defineProperty(String.prototype, "words", {
    value () {
        
        return this.match(/(\w+)/g);

    }
});

/**
 * Gets the number of words contained in the string
 * 
 * @returns {Number}
 */
Object.defineProperty(String.prototype, "wordCount", {
    value () {

        return this.words().length;

    }
});

/**
 * Formats the given number as currency 
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "toCurrency", {
    value () {

        return this.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");

    }
});

/**
 * Formats the given currency string as numerical 
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "fromCurrency", {
    value () {

        return Number(this.replace(/[,]/g,""));

    }
});

/**
 * Returns a version of the string with the cases inverted 
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "inverseCase", {
    value () {

        return this.replace(/[A-Za-z]/g,(matched) => {

            return /[A-Z]/g.test(matched) ? matched.toLower() : matched.toUpper();

        });

    }
});

/**
 * Returns a version of the string where the cases alternate per character 
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "alternatingCase", {
    value () {

        return this.replace(/[A-Za-z]/g,(matched,index) => {

            return index % 2 ? matched.toUpper() : matched.toLower();

        });

    }

});

/**
 * Returns the middle character(s) of the string 
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "getMiddle", {
    value () {

        //if string is just one character return that character 
        if (this.length === 1) return this[0];

        //split string into two
        const regex = new RegExp(`.{${ ~~(this.length / 2) }}`,"g"),
            matches = this.match(regex);
            
        /** if of even length return last letter of first match and first letter of second
         * else return just the first letter of the second match
         */
        return this.length % 2 ? matches[1][0] : matches[0][matches[0].length - 1] + matches[1][0];

    }
});

/**
 * Returns a version of the given numerical string
 * where the numbers are expressed as their text
 * versions
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "numberWords", {
    value () {

        const codex = ["zero","one","two","three","four",
            "five", "six", "seven", "eight","nine"];

        return this.replace(/[0-9]/g,(matched) => {
           
            return `${codex[matched]} `;

        }).trim();

    }
  
});

/**
 * Checks if the string is a single digit
 * @returns {Boolean}
 */
Object.defineProperty(String.prototype, "isDigit", {
    value () {

        if (! /\d/.test(this) ) return false;
        return this.match(/\d/g).length === 1;

    }
  
});

/**
 * Checks if the string contains two characters repeated
 * next to each other 
 * 
 * @returns {String}
 */
Object.defineProperty(String.prototype, "doubleCheck", {
    value () {

        return /(\S)\1/g.test(this);

    }

});
