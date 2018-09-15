require('express-group-routes');
const express = require('express');
const router = express.Router();

const storekeepersController = require('./controller/storekeepers');
const ordersController = require('./controller/orders');



router.group('/storekeepers',  (router) => {
    router.get("/", storekeepersController.getStorekeepers);
    router.get("/vehicle/:type", storekeepersController.getStorekeepersByVehicle);


});


router.group('/orders',  (router) => {
    router.get("/", ordersController.getOrders);
    router.get("/type/:type", ordersController.getOrdersByType);


});



    

module.exports = router;


