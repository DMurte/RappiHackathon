const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const Sequelize = require('sequelize');

const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const url = 'mongodb://hackathonmongo:hackathon2018rappimongodb@mongo-hackathon.eastus2.cloudapp.azure.com:27017/orders';


var request= {};

request.getOrders = async ((data) => {
    return new Promise( (resolve , reject ) => {
        let ordersArray = [];
        MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db('orders');

            db.collection('orders').find({
                lat : { 
                    $gte: data.south, 
                    $lte: data.north 
                },
                lng : {
                    $gte: data.west, 
                    $lte: data.east 
                } 
            }).toArray( (err, order) => {
                order.forEach( (e) => ordersArray.push(e) );
                client.close();
                resolve(ordersArray)

            });

        });

    });
});

request.getOrdersByType = async ((data) => {
    return new Promise( (resolve , reject ) => {
        let ordersArray = [];

        MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db('orders');

            db.collection('orders').find({
                    type : data.type,
                    lat : { 
                        $gte: data.coordinates.south, 
                        $lte: data.coordinates.north 
                    },
                    lng : {
                        $gte: data.coordinates.west, 
                        $lte: data.coordinates.east 
                    } 
                }).toArray( (err, order) => {
                order.forEach( (e) => ordersArray.push(e) );
                client.close();

                resolve(ordersArray)

            });
        });

    });
});





module.exports = request;
