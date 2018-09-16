require('express-group-routes');
const express = require('express');
const router = express.Router();

const storekeepersController = require('./controller/storekeepers');
const ordersController = require('./controller/orders');
const saturationController = require('./controller/saturation');



router.group('/storekeepers',  (router) => {
    router.post("/", storekeepersController.getStorekeepers);
    router.post("/vehicle", storekeepersController.getStorekeepersByVehicle);
    router.post("/saturation", saturationController.vehicleSaturation);

});

router.group('/orders',  (router) => {
    router.post("/", ordersController.getOrders);
    router.post("/type", ordersController.getOrdersByType);
    router.post("/saturation", saturationController.ordersSaturation);

});



    

module.exports = router;


