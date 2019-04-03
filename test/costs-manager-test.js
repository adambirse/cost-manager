var chai = require('chai');
var expect = chai.expect;
var costManager = require('../costs/costs-manager');

describe('Costs Manager', function() {

    beforeEach(function(done) {
        costManager.clearCosts();
        done();
    });

    it('Add Costs - Single item', function() {

        var item = { time: '2019-04-03T06:15:43.47', cost: 123 };

        costManager.addData(item);
        expect(costManager.getCosts()).to.have.members([item]);
    });

    it('Add Costs - Multiple items', function() {

        var item1 = { time: '2019-04-03T06:15:43.47', cost: 123 };
        var item2 = { time: '2019-05-03T06:15:43.47', cost: 456 };

        costManager.addData(item1);
        costManager.addData(item2);
        expect(costManager.getCosts()).to.have.members([item1, item2]);
    });
});