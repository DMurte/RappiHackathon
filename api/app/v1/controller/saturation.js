const async = require('es5-async-await/async');
const await = require('es5-async-await/await');

const responses = require('../tools/responses');
const queries = require('../queries/orders');

const controller = {};

controller.ordersSaturation = async ((req, res) => {
    try {
        let response = await (queries.ordersSaturation(req.body));
        response = responses.successWithData(response);
        res.status(200).send(response);

    } catch(error) {
        error = responses.error(error);
        res.status(500).send(error);
        
    }
});

controller.vehicleSaturation = async ((req, res) => {
    try {
        let response = await (queries.vehicleSaturation(req.body));
        response = responses.successWithData(response);
        res.status(200).send(response);

    } catch(error) {
        error = responses.error(error);
        res.status(500).send(error);
        
    }
});


module.exports = controller;

