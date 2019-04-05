var chai = require('chai');
var assert = chai.assert;
var dateUtilities = require('../utilities/date-utilities');

describe('Date Utilities', function () {


    it('Same Day', function () {
        assert.isTrue(dateUtilities.sameDay(new Date(Date.now()), new Date(Date.now())));
    });

    it('Different Day', function () {
        assert.isFalse(dateUtilities.sameDay(new Date(2019, 10, 1), new Date(2019, 10, 2)));
    });

    it('Extract Date', function () {
        const d = dateUtilities.extractDate('2019-04-05T06:15:43.47');
        assert.equal(d.getFullYear(), '2019');
        assert.equal(d.getMonth(), '3');
        assert.equal( d.getDate(), '5');
    });
});