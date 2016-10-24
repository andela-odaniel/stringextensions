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

        it("should convert a string containing lower case characters to upper case only", () => {

            const word1 = "this is a string",
                word2 = "This Is A string";
            
            expect(word1.toUpper()).to.equal("THIS IS A STRING");

            expect(word2.toUpper()).to.equal("THIS IS A STRING");

        });

    });

    describe(".toLower()", () => {

        it("should convert a string containing upper case characters to lower case only", () => {

            const word1 = "THIS IS A STRING",
                word2 = "This Is A string";
            
            expect(word1.toLower()).to.equal("this is a string");

            expect(word2.toLower()).to.equal("this is a string");

        });

    });

    describe(".ucFirst()", () => {

        it("should make the first character of the string uppercase if it isn't ", () => {

            let word = "thIS Is a StRING";
            word = word.ucFirst();
            expect(word[0]).to.equal("T");

        });

    });

});
