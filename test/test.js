'use strict'
require ('../src/string');

let expect = require('chai').expect;


describe('String Extensions',function(){

    describe('.hasVowels()',function(){
        it('should check if the string contains vowels',function() {
            let word1 = "apple",
                word2 = "crypt";
            expect(word1.hasVowels()).to.be.true;
            expect(word2.hasVowels()).to.be.false;
        })
    })

    describe('.toUpper()', function(){
        it('should convert a string containing lower case characters to upper case only',function(){
            let word1 = "this is a string";
            expect(word1.toUpper()).to.equal('THIS IS A STRING');

            let word2 = "This Is A string";
            expect(word2.toUpper()).to.equal('THIS IS A STRING');
        })
    })
});