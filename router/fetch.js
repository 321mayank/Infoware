const express = require('express');

const fetchRouter = express.Router();

const { getOneEmployee } = require('../controller/fetch')

fetchRouter.get('/:empID/fetch',getOneEmployee);

module.exports = fetchRouter;