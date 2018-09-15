require('express-group-routes');
const express = require('express');
const router = express.Router();

const storekeepersController = require('./controller/main');



router.get("/storekeepers",storekeepersController.getStorekeepers);
    

module.exports = router;


