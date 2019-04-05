const express = require('express');
const router = express.Router();
const costManager = require('../costs/costs-manager');

const title = 'Costs';

/* GET costs listing. */
router.get('/', function (req, res, next) {
    res.render('costs', {title: title, costs: costManager.getCosts(), aggregatedCosts: costManager.getAggregatedCosts()});
});

function addData(item) {
    costManager.addCost(item);
}

module.exports = {
    router:router,
    addData:addData
};
