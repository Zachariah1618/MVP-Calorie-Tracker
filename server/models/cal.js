var db = require('../db').client;

module.exports = {

  get: function(params) {
    const query = {
      text: 'SELECT * FROM calitems LIMIT $1 OFFSET $2',
      values: [params[0], params[1]]
    }
    return db.query(query)
      .then((result) => {return result.rows})
      .catch((err) => {console.log(err)})
  },

  add: function(params) {
    var date = new Date();
    var newdate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
    console.log(newdate);
    const query = {
      text: 'INSERT INTO calitems (name, quantity, unit, cal, date) VALUES ($1, $2, $3, $4, $5)',
      values: [params[0], params[1], params[2], params[3], newdate]
    }
    return db.query(query)
      .then(() => {console.log('Post was completed')})
      .catch((err) => {console.log(err)})
  }
};