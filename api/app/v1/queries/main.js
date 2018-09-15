const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const MongoClient = require('mongodb').MongoClient
// const mongo = require('mongodb');
const assert = require('assert');
const url = 'mongodb://hackathonmongo:hackathon2018rappimongodb@mongo-hackathon.eastus2.cloudapp.azure.com:27017/orders';



const Model = require('../models/storekeepers');


var request= {};

request.getStorekeepers = async ((data) => {
    return new Promise( (resolve , reject ) => {
        const storekeepers = await ( Model.storekeepers.findAll());        
        resolve(storekeepers);

    });
});


request.getOrders = async ((data) => {
    return new Promise( (resolve , reject ) => {
        let ordersArray = [];
        MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db('orders');

            db.collection('orders').find({}).toArray( (err, order) => {
            order.forEach(function(e) { ordersArray.push(e);
            });

            client.close();
            resolve(ordersArray)

            });
        });


    });
});



module.exports = request;
