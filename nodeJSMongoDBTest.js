/*
* Taken from  http://docs.mongodb.org/ecosystem/drivers/node-js/
 * A Node script  connecting to a MongoDB database given a MongoDB Connection
URI.
*/

/*var mongodb = require('mongodb');

// Create seed data -- it is in JSON format
var seedData = [
    {
        SHIPPING_STREET: '123 Street St.',
        SHIPPING_CITY: 'City Town',
        SHIPPING_STATE: 'Flux',
        SHIPPING_ZIP: 12345,
        _id: 1
    },
    {
        SHIPPING_STREET: '098 Avenue Ave.',
        SHIPPING_CITY: 'Bunkerville',
        SHIPPING_STATE: 'Gaseous',
        SHIPPING_ZIP: 09876,
        _id: 2
    },
    {
        SHIPPING_STREET: '6 Six Ln.',
        SHIPPING_CITY: 'Homestead',
        SHIPPING_STATE: 'Liquid',
        SHIPPING_ZIP: 66666,
        _id: 3
    }
];

// Standard URI format:  mongodb://[dbuser:dbpassword@]host:port/dbname
// GO TO mLab.com account to see what YOUR database URL is
//CHANGE the url so it is correct for your account
var uri ='mongodb://<bryce>:<headset0>@ds064198.mlab.com:64198/proj2';

//using mongodb module
mongodb.MongoClient.connect(uri, function(err, db) {

    if(err) throw err;
*/
    /*
     * First we'll add a  few songs. Nothing is required to create the
     * songs collection;  it is created automatically when we insert.
     */
//    var orders =  db.collection('ORDERS');

    // Note that the  insert method can take either an array or a dict.
  //  orders.insert(seedData, function(err, result) {
    //    if(err) throw err;

        /*
         * Then we need to  give Boyz II Men credit for their contribution
         * to the hit  "One Sweet Day".

        err.update(
            { song: 'One  Sweet Day' },
            { $set: {  artist: 'Mariah Carey ft. Boyz II Men' } },
            function (err,  result) {
                if(err) throw  err;
                /*
                 * Finally we  run a query which returns all the hits that spend 10 or
                 * more weeks  at number 1.
                 */
/*                orders.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1}).toArray(function (err, docs) {
*                    if(err)  throw err;
*                    docs.forEach(function  (doc) {
*                        console.log('In the  ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc ['artist'] + ' topped  the charts for ' + doc['weeksAtOne'] + ' straight weeks.');
*                    });

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



 //               });