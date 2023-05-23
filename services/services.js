// Importing the 'Employee' model from the '../models' module
const db = require('../models');
const employee = db.employee;

// Function to request Employee data by email
async function requestEmployeedataByEmail(email) {
const foundEmployee = await employee.findOne({ where: { email } });
return foundEmployee;
}

// Function to create a new Employee
async function createEmployee(info) {
await employee.create(info);
}

// Function to get all Employee
async function getAllEmployee() {
const allEmployee = await employee.findAll();
return allEmployee;
}

// Function to update a Employee by document ID
async function updateEmployee(empID, info) {
const foundEmployee = await employee.findOne({ where: { empID: empID } });
if (!foundEmployee) {
throw new Error(`Employee with empID ${empID} not found`);
}

await foundEmployee.update(info);
}

// Function to delete a Employee by document ID
async function deleteEmployee(empID) {
const foundEmployee = await employee.findOne({ where: { empID: empID } });
if (!foundEmployee) {
throw new Error(`Employee with ID ${empID} not found`);
}

await foundEmployee.destroy();
}

async function getEmployeeByID(empID) {
    const foundEmployee = await employee.findOne({ where: { empID } });
    return foundEmployee;
    }

// Exporting the functions for use in other modules
module.exports = {
requestEmployeedataByEmail,
createEmployee,
getAllEmployee,
updateEmployee,
deleteEmployee,
getEmployeeByID
};