var controller = require('./controllers');
var router = require('express').Router();


//GET Request
router.get('/caltrack', controller.cal.get);

router.post('/caltrack', controller.cal.add);



module.exports = router;