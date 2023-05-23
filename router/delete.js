const express = require('express');

const deleteRouter = express.Router();

const { deleteEmployeeById } = require('../controller/delete');


deleteRouter.delete('/:empID/delete', deleteEmployeeById);

module.exports = deleteRouter