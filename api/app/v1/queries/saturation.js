const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Model = require('../models/storekeepers');

const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const url = 'mongodb://hackathonmongo:hackathon2018rappimongodb@mongo-hackathon.eastus2.cloudapp.azure.com:27017/orders';


var request= {};

request.ordersSaturation = async ((data) => {
    return new Promise( (resolve , reject ) => {
        const ordersArray = [];
        const storekeepers = await ( Model.storekeepers.findAll({ 
            where : {
                    lat : {
                        [Op.lte]: data.north,
                        [Op.gte]: data.south
                    },
                    lng : {
                        [Op.between]: [ data.west, data.east ]

                    }
                }
            })); 

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
            });
        });

        resolve('Ok');

    });
});


request.vehicleSaturation = async ((data) => {
    return new Promise( (resolve , reject ) => {
        resolve('vehicleSaturation')

    });
});







module.exports = request;
