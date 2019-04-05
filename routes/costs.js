var express = require('express');
var router = express.Router();
var costManager = require('../costs/costs-manager');

var title = 'Costs';

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
