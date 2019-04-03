var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

describe('Example Test', function() {
    it('Example test - basic addition', function() {
        expect(1+1).to.equal(2)
    });
    it('Example test - basic subtraction', function() {
        expect(2-1).to.equal(1)
    });
});