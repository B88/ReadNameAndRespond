var express = require('express');
var router = express.Router();

//########################################
//to process data sent in on request need body-parser module
var bodyParser = require('body-parser');

//#########################################

/*router.post('/getMyNodeResults', function(req, res, next) {
    //expecting data variable called name --retrieve value using body-parser
    var value_name = req.body.name;  //retrieve the data associated with name
    res.send("hello " + value_name);
});

router.post('/', function (req, res, next) {
    //expecting data variable called name --retrieve value using body-parser
    var value_name = req.body.name;  //retrieve the data associated with name
    res.send("you hit root directory");
});
*/


//LOAD the various controllers
//var controllerMain = require('../controllers/main');   //this will load the main controller file
var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection

//MAY HAVE OTHER CODE in index.js
//CODE to route /getAllRoutes to appropriate  Controller function
//**************************************************************************
//***** mongodb get all of the Routes in Routes collection w
//      and Render information iwith an ejs view
router.get('/getAllOrders', controllerMongoCollection.getAllOrders);


module.exports = router;
