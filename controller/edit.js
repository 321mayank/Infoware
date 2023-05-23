const { updateEmployee } = require('../services/services');

async function edit(req, res, next) {
  const empID = req.params.empID; // Extracting 'empID' parameter
  const { name, job, number, email, address, city, state, primaryEmergencyContact, PEnumber, PErelationship, secondaryEmergencyContact, SEnumber, SErelationship } = req.body;

  const info = { 
    empID,
    name,
    job,
    number,
    email,
    address,
    city,
    state,
    primaryEmergencyContact,
    PEnumber,
    PErelationship,
    secondaryEmergencyContact,
    SEnumber,
    SErelationship
  }; // Creating 'info' object with extracted properties

  try {
    await updateEmployee(empID, info); // Updating the employee asynchronously with 'empID' and 'info'

    res.status(200).json({
      success: true,
      message: `Employee with Emp ID ${empID} has been updated successfully`,
    }); // Sending a successful response
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the Employee data',
      error: error.message,
    }); // Sending an error response
  }

  next(); // Proceeding to the next middleware or route handler
}

module.exports = { edit }; // Exporting the 'edit' function
