
var costs = []; //time and cost

function addData(item) {
    costs.push(item);
}


function getCosts() {
    return costs;
}

function clearCosts() {
    costs = [];
}

module.exports = {
    addData:addData,
    getCosts:getCosts,
    clearCosts:clearCosts
};
