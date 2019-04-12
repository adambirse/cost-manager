const chai = require('chai');
const expect = chai.expect;
const costManager = require('../costs/costs-manager');

describe('Costs Manager', function() {

    beforeEach(function(done) {
        costManager.clearCosts();
        done();
    });

    it('Add Costs - Single item', function() {

        const item = { date: '2019-04-03', cost: 123 };

        costManager.addCost(item);
        expect(costManager.getCosts()).to.have.members([item]);
    });

    it('Add Costs - Multiple items', function() {

        const item1 = { date: '2019-04-03', cost: 123 };
        const item2 = { date: '2019-05-03', cost: 456 };

        costManager.addCost(item1);
        costManager.addCost(item2);
        expect(costManager.getCosts()).to.have.members([item1, item2]);
    });

    it('Add Aggregated Costs - First Aggregated Cost', function() {

        const item = {date: '2019-11-03', cost: 123};
        const expected = [{date: new Date(2019, 10, 3), total: 123}];

        costManager.addCost(item);
        expect(costManager.getAggregatedCosts()).to.eql(expected);
    });

    it('Add Aggregated Cost - Different days ', function() {

        const item1 = { date: '2019-04-03', cost: 100 };
        const item2 = { date: '2019-04-04', cost: 200 };

        const expected = [
            {date: new Date(2019, 3, 3), total: 100},
            {date: new Date(2019, 3, 4), total: 200}
        ];


        costManager.addCost(item1);
        costManager.addCost(item2);

        expect(costManager.getAggregatedCosts()).to.eql(expected);
    });


    it('Add Aggregated Cost - Same day ', function() {

        const item1 = { date: '2019-04-04', cost: 100 };
        const item2 = { date: '2019-04-04', cost: 200 };

        const expected = [
            {date: new Date(2019, 3, 4), total: 300}
        ];

        costManager.addCost(item1);
        costManager.addCost(item2);

        expect(costManager.getAggregatedCosts()).to.eql(expected);
    });

    it('Add Aggregated Cost - Multiple Entries ', function() {

        const item1 = { date: '2019-04-04', cost: 100 };
        const item2 = { date: '2019-04-04', cost: 200 };
        const item3 = { date: '2019-04-04', cost: 300 };

        const item4 = { date: '2019-04-05', cost: 200 };
        const item5 = { date: '2019-04-05', cost: 300 };

        const item6 = { date: '2019-04-06', cost: 123 };


        const expected = [
            {date: new Date(2019, 3, 4), total: 600},
            {date: new Date(2019, 3, 5), total: 500},
            {date: new Date(2019, 3, 6), total: 123}

        ];

        costManager.addCost(item1);
        costManager.addCost(item2);
        costManager.addCost(item3);
        costManager.addCost(item4);
        costManager.addCost(item5);
        costManager.addCost(item6);

        expect(costManager.getAggregatedCosts()).to.eql(expected);
    });

    it('Add Aggregated Cost - Multiple Entries ', function() {

        const item1 = { date: '2019-04-04', cost: 100 };
        const item2 = { date: '2019-04-04', cost: 200 };
        const item3 = { date: '2019-04-04', cost: 300 };

        const item4 = { date: '2019-04-05', cost: 200 };
        const item5 = { date: '2019-04-05', cost: 300 };

        const item6 = { date: '2019-04-06', cost: 123 };


        const expected = [
            {date: new Date(2019, 3, 4), total: 600},
            {date: new Date(2019, 3, 5), total: 500},
            {date: new Date(2019, 3, 6), total: 123}

        ];

        costManager.addCost(item1);
        costManager.addCost(item2);
        costManager.addCost(item3);
        costManager.addCost(item4);
        costManager.addCost(item5);
        costManager.addCost(item6);

        expect(costManager.getAggregatedCosts()).to.eql(expected);
    });
});