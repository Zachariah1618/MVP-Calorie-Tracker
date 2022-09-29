var models = require('../models');



module.exports = {
  get: function(req, res) {
    var params = [req.query.count, (req.query.page * req.query.count).toString()];
    return models.cal.get(params)
    .then((data) => {res.send(data)})
    .catch((err) => {console.log(err)})
  },

  add: function(req, res) {
    var params = [req.body.params.name, req.body.params.quantity, req.body.params.unit, req.body.params.cal];
    return models.cal.add(params)
      .then(() => {res.status(201).end()})
      .catch((err) => console.log(err))
  }
};