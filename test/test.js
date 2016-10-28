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

            const string1 = "this is a string",
                string2 = "This Is A string";
            
            expect(string1.toUpper()).to.equal("THIS IS A STRING");

            expect(string2.toUpper()).to.equal("THIS IS A STRING");

        });

    });

    describe(".toLower()", () => {

        it("should convert a string containing upper case characters to lower case only", () => {

            const string1 = "THIS IS A STRING",
                string2 = "This Is A string";
            
            expect(string1.toLower()).to.equal("this is a string");

            expect(string2.toLower()).to.equal("this is a string");

        });

    });

    describe(".ucFirst()", () => {

        it("should make the first character of the string uppercase if it isn't", () => {

            let string = "thIS Is a StRING";
            string = string.ucFirst();
            expect(string[0]).to.equal("T");

        });

    });

    describe(".isQuestion()", () => {

        it("checks if the string contains a question", () => {

            const string1 = "Is this a question?",
                string2 = "This is not a question.";
            
            expect(string1.isQuestion()).to.be.true;

            expect(string2.isQuestion()).to.be.false;

        });

    });

    describe(".words()", () => {

        it("returns the words in a given string", () => {

            const string = "Is this a question?",
                stringWords = string.words();
            
            expect(stringWords).to.be.an("array");
            expect(stringWords.length).to.equal(4);

            stringWords.map((word) => {

                expect(string.indexOf(word)).to.be.above(-1);

            });

        });

    });

    describe(".wordCount()", () => {

        it("returns the number of words in a given string", () => {

            const string = "Is this a question?",
                wordLength = string.wordCount();
            
            expect(wordLength).to.be.an("number");
            expect(wordLength).to.equal(4);

        });

    });

    describe(".toCurrency()", () => {

        it("converts a given string to currency", () => {

            const string = "11111.11",
                currencyFromString = string.toCurrency();
            expect(currencyFromString).to.equal("11,111.11");
            
        });

    });

    describe(".fromCurrency()", () => {

        it("converts a given currency string to a numerical format", () => {

            const string = "11,111.11",
                currencyFromString = string.fromCurrency();
            expect(currencyFromString).to.equal(11111.11);
            
        });

    });

    describe(".inverseCase()", () => {

        it("inverts the case of characters in the string", () => {

            const string = "aAbbCCdDee",
                invertedString = string.inverseCase();
            expect(invertedString).to.equal("AaBBccDdEE");
            
        });

    });

});
