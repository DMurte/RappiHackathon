require('express-group-routes');
const express = require('express');
const router = express.Router();

const mainController = require('./controller/main');



router.get("/storekeepers", mainController.getStorekeepers);
router.get("/orders", mainController.getOrders);

    

module.exports = router;


