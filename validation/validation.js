// Importing the Joi library for data validation
const joi = require('joi');

// Defining the validation schema for the register data
const registerData = {
body: joi.object().keys({
name: joi.string().required(),
job: joi.string().required(),
number: joi.string().required().min(10).max(10),
email: joi.string().required().email(),
address: joi.string().required(),
city: joi.string().required(),
state: joi.string().required(),
primaryEmergencyContact: joi.string().required(),
PEnumber: joi.string().required().min(10).max(10),
PErelationship: joi.string().required(),
secondaryEmergencyContact: joi.string().required(),
SEnumber: joi.string().required().min(10).max(10),
SErelationship: joi.string().required(),
}),
};

// Exporting the registerData object for use in other modules
module.exports = {
registerData,
};