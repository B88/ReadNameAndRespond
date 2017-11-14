/*
* Taken from  http://docs.mongodb.org/ecosystem/drivers/node-js/
 * A Node script  connecting to a MongoDB database given a MongoDB Connection
URI.
*/

//var mongodb = require('mongodb');

// Standard URI format:  mongodb://[dbuser:dbpassword@]host:port/dbname
// GO TO mLab.com account to see what YOUR database URL is
//CHANGE the url so it is correct for your account
//var uri ='mongodb://<bryce>:<headset0>@ds064198.mlab.com:64198/proj2';

//using mongodb module
//mongodb.MongoClient.connect(uri, function(err, db) {
  //  if(err) throw err;
    /*
     * First we'll add a  few songs. Nothing is required to create the
     * songs collection;  it is created automatically when we insert.
     */
    //var orders =  db.collection('ORDERS');
    //orders.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1}).toArray(function (err, docs) {
//        if(err)  throw err;
//        docs.forEach(function  (doc) {
//            console.log('In the  ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc ['artist'] + ' topped  the charts for ' + doc['weeksAtOne'] + ' straight weeks.');
//        });

        // uncomment the following code if you wish to drop the collection (like a table) songs
        /***************************commented OUT
         songs.drop(function (err) {
            if(err)  throw err;
            // Only  close the connection when your app is terminating.
            db.close(function  (err) {
                if(err)  throw err;
            });
        });
         */
//    });
//}