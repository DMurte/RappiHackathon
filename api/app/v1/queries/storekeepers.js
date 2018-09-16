const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Model = require('../models/storekeepers');


var request= {};

request.getStorekeepers = async ((data) => {
    return new Promise( (resolve , reject ) => {
        const north = data.north
        const south = data.south
        const east = data.east
        const west = data.west

        const storekeepers = await ( Model.storekeepers.findAll({ 
            where : {
                    lat : {
                        [Op.lte]: north,
                        [Op.gte]: south
                    },
                    lng : {
                        [Op.between]: [ west, east ]

                    }
                },
                attributes : ['lat', 'lng', 'toolkit']
            }
        ));    

        resolve(storekeepers)


    });
});



request.getStorekeepersByVehicle = async ((data) => {
    return new Promise( (resolve , reject ) => {
        let filteredStorekeepers = [];
        const storekeepers = await ( Model.storekeepers.findAll({ 
                where : {
                        lat : {
                            [Op.lte]: data.coordinates.north,
                            [Op.gte]: data.coordinates.south
                        },
                        lng : {
                            [Op.between]: [ data.coordinates.west, data.coordinates.east ]

                        }

                    },
                attributes : ['lat', 'lng', 'toolkit']

            })
        ); 

        if(data.type != 0){
            storekeepers.forEach(e => {
                if(e.toolkit.vehicle == data.type) filteredStorekeepers.push(e);
                
            });

        }else{
            filteredStorekeepers = storekeepers
            
        }
       

        resolve(filteredStorekeepers);


    });
});




module.exports = request;
