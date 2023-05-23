const { deleteEmployee } = require('../services/services'); // Importing the deleteEmployee function from the '../services/services' module

async function deleteEmployeeById(req, res) {
  const empID = req.params.empID; // Extracting the 'empID' parameter from the request parameters

  try {
    await deleteEmployee(empID); // Calling the deleteEmployee function asynchronously with the 'empID'

    res.status(200).json({
      success: true,
      message: `Employee with emp ID ${empID} has been deleted successfully`,
    }); // Sending a successful response
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the Employee',
      error: error.message,
    }); // Sending an error response
  }
}

module.exports = { deleteEmployeeById }; // Exporting the deleteEmployeeById function
