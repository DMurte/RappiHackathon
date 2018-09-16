const validate = require('validate.js');
const async = require('es5-async-await/async');
const await = require('es5-async-await/await');

const responses = require('../tools/responses');
const queries = require('../queries/storekeepers');


const controller = {};

controller.getStorekeepers = async ((req, res) => {
    try {
        let response = await (queries.getStorekeepers(req.body));
        response = responses.successWithData(response);
        res.status(200).send(response);

    } catch(error) {
        error = responses.error(error);
        res.status(500).send(error);
        
    }
});

controller.getStorekeepersByVehicle = async ((req, res) => {
    try {
        let response = await (queries.getStorekeepersByVehicle(req.body));
        response = responses.successWithData(response);
        res.status(200).send(response);

    } catch(error) {
        error = responses.error(error);
        res.status(500).send(error);
        
    }
});



module.exports = controller;

