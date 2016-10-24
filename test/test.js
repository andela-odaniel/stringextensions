"use strict";

require ("../src/string");

const expect = require("chai").expect;

describe("String Extensions",() => {

    describe(".hasVowels()", () => {

        it("should check if the string contains vowels", () => {

            const word1 = "apple",
                word2 = "crypt";
            expect(word1.hasVowels()).to.be.true;
            expect(word2.hasVowels()).to.be.false;

        });

    });

    describe(".toUpper()", () => {

        it("should convert a string containing lower case characters to upper case only",() => {

            const word1 = "this is a string",
                word2 = "This Is A string";
            
            expect(word1.toUpper()).to.equal("THIS IS A STRING");

            expect(word2.toUpper()).to.equal("THIS IS A STRING");

        });

    });

});
