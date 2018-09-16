const validate = require('validate.js');
const async = require('es5-async-await/async');
const await = require('es5-async-await/await');

const responses = require('../tools/responses');
const queries = require('../queries/orders');


const controller = {};

controller.getOrders = async ((req, res) => {
    try {
        let response = await (queries.getOrders());
        response = responses.successWithData(response);
        res.status(200).send(response);

    } catch(error) {
        error = responses.error(error);
        res.status(500).send(error);
        
    }
});

controller.getOrdersByType = async ((req, res) => {
    try {
        let response = await (queries.getOrdersByType(req.body));
        response = responses.successWithData(response);
        res.status(200).send(response);

    } catch(error) {
        error = responses.error(error);
        res.status(500).send(error);
        
    }
});


module.exports = controller;

