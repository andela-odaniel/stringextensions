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
});