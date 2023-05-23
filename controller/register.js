const shortid = require('shortid');
const { registerData } = require('../validation/validation')
const { requestEmployeedataByEmail ,createEmployee } = require('../services/services');

// Function to render registration page
function registerRender(req,res){
  res.render('register')
}

async function register(req, res, next) {
  
  // Validate registration data
  const { error, value } = registerData.body.validate(req.body)
  if (error) {
    const errorMessage = error.details[0].message;
    console.log(errorMessage);
    res.send(errorMessage);
    return;
  } else {
    

    // Extract data from request body
    const { name,job, number, email, address, city, state, primaryEmergencyContact, PEnumber, PErelationship, secondaryEmergencyContact, SEnumber, SErelationship   } = req.body;

    // Generate Employee ID
    const empID = shortid.generate();

    // Store Employee data in info object
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
      SErelationship }

    // Check if email already exists in database
    const checkResult = await requestEmployeedataByEmail(email)
    if (checkResult) {
      res.send('email allready exist');
    } else {
      // Create Employee in database 
      await createEmployee(info)
      res.send("data uploded")
    }
  }
}


module.exports = {
  registerRender,
  register,
};