const dateUtilities = require('../utilities/date-utilities');

let costs = []; //time and cost
let aggregatedCosts = [];

function addCost(cost) {
    costs.push(cost);
    updateAggregatedCosts(cost);
}


function getCosts() {
    return costs;
}

function getAggregatedCosts() {
    return aggregatedCosts;
}

function clearCosts() {
    costs = [];
    aggregatedCosts = [];
}

function updateAggregatedCosts(cost) {

    const timestamp = dateUtilities.extractDate(cost.time);

    if (aggregatedCosts === undefined || aggregatedCosts.length === 0) {
        aggregatedCosts.push( {
            date : new Date(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate()),
            total : cost.cost
        });
    } else {

        let aggCost;
        let found = false;
        for (aggCost of aggregatedCosts) {

            if(dateUtilities.sameDay(aggCost.date, timestamp)) {
                aggCost.total = aggCost.total += cost.cost;
                found = true;
                break;
            }
        }

        if(!found) {
            aggregatedCosts.push( {
                date : new Date(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate()),
                total : cost.cost
            });
        }
    }
}

module.exports = {
    addCost:addCost,
    getCosts:getCosts,
    getAggregatedCosts:getAggregatedCosts,
    clearCosts:clearCosts
};
