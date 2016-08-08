'use strict';

let fs = require('fs'),
    mongojs = require('mongojs'),
    colors = require('colors'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    https = require('https'),
    http = require('http'),
    Twitter = require('twitter'),
    request = require('request'),
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'),
    Client = require('node-rest-client').Client;

var client = new Client();

let dbConnectionString = '';

var ignitionSwitch = false;

if (ignitionSwitch) {

    dbConnectionString = 'mongodb://heroku_td9mdp69:vl3o3hsj6e61ib7kiaul0vsjrd@ds139725.mlab.com:39725/heroku_td9mdp69';

} else {

    dbConnectionString = 'gps';
}

var db = mongojs(dbConnectionString, ['gps']);


app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static('public'));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {

    console.log('\n');
    console.log('********************************************'.black.bgWhite);
    console.log("The frontend server is running on port 5000!".black.bgWhite);
    console.log('********************************************'.black.bgWhite);
    console.log('\n');

});

app.get('/', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    var html = fs.readFileSync('public/views/base.html');
    res.end(html);

});

app.get('/outermost', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    db.gps.find().limit(1).sort({
        _id: -1
    }, function (err, docs) {

        console.log(docs);
        res.json(docs)
    })

});

app.get('/del-all', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING del-all REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    db.gps.remove(function (err, docs) {
        if (err) {
            throw err;
        }
        res.json(docs)
    });

});

app.get('/get-count', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING db.gps.count() REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');
    console.log(db.stats());
    console.log('\n');

    var totalInCollection = db.gps.count({

    }, function (err, docs) {
        console.log(docs)
        res.json(docs);
    });

});

app.get('/homebrew', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    db.gps.find(function (err, docs) {
        // console.log(docs)
        res.json(docs)

    })

});

app.post('/homebrew', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING POST REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');
    // console.log(req.body); // 
    console.log('\n');

    db.gps.insert(req.body, function (err, docs) {

        console.log(docs)
        res.json(docs)

    })

});

app.delete('/homebrew/:id', function (req, res) {

    let id = req.params.id;
    console.log('\n');
    console.log('******* INCOMING DELETE REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');
    console.log(id);
    console.log('\n');

    db.gps.remove({
        _id: mongojs.ObjectId(id)
    }, function (err, docs) {

        console.log(docs)
        res.json(docs)

    })

});

app.get('/homebrew/:id', function (req, res) {

    let id = req.params.id;
    console.log('\n');
    console.log('******* INCOMING CUSTOM GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');
    console.log(id);
    console.log('\n');

    db.gps.findOne({
        _id: mongojs.ObjectId(id)
    }, function (err, docs) {
        console.log(docs)
        res.json(docs);
    });

});

app.put('/homebrew/:id', function (req, res) {

    let id = req.params.id;
    console.log('\n');
    console.log('******* INCOMING CUSTOM PUT REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');
    // console.log(id);
    console.log('\n');
    console.log(req.body.name);
    console.log('\n');

    var asd = {
        _id: mongojs.ObjectId(id)
    };

    db.gps.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
                lat: req.body.lat,
                long: req.body.long
            }
        },
        new: true
    }, function (err, docs) {
        console.log(docs)
        res.json(docs);
    });

});