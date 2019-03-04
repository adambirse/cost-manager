var express = require('express');
var router = express.Router();

var title = 'Costs';
/* GET costs listing. */
router.get('/', function(req, res, next) {
  res.render('costs', { title: title, costs: costs });
});

function addData(item) {
  costs.push(JSON.parse(item));
}

module.exports = {
  router:router,
  addData:addData
};
