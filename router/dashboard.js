const express = require('express');


const dashboardRouter = express.Router();

const {
    handleGetAllEmployee
} = require('../controller/dashboard');



dashboardRouter.get('/dashboard', handleGetAllEmployee);


module.exports = dashboardRouter;
