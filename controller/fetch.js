const { getEmployeeByID } = require('../services/services');

async function getOneEmployee(req, res) {
    const empID = req.params.empID; // Extracting 'empID' parameter from request parameters
    const checkResult = await getEmployeeByID(empID); // Checking if employee exists

    if (checkResult) {
      res.send(checkResult); // Sending employee data if it exists
    } else {
      res.send("Employee does not exist"); // Sending message if employee does not exist
    }
}

module.exports = { getOneEmployee }; // Exporting the 'getOneEmployee' function
