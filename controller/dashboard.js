const { getAllEmployee } = require('../services/services'); // Importing the getAllEmployee function

async function handleGetAllEmployee(req, res) {
  const allEmployee = await getAllEmployee(); // Retrieving all employees
  
  res.render('dashboard', { Employees: allEmployee }); // Rendering the dashboard view with employee data
}

module.exports = { handleGetAllEmployee }; // Exporting the handleGetAllEmployee function
