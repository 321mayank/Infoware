INFOWARE CRUD PROJECT Documentation
This documentation provides an overview of the routes available in the INFOWARE CRUD project and the database used.

Routes

1.Add New Data - POST Request: /register
This route is used to add new data to the system.
Method: POST
Request Body: The required data for adding a new record.
Response: Success message or error message.

2.Show All Data - GET Request: /dashboard
This route is used to retrieve and display all data from the system.
Method: GET
Response: List of all data records or an error message.

3.Edit Data - PUT Request: /:EmpID/edit
This route is used to update existing data by providing the employee ID (EmpID).
Method: PUT
Request Body: The updated data for the specified employee ID.
Response: Success message or error message.

4.Delete Data - DELETE Request: /:EmpID/delete
This route is used to delete data for a specific employee by providing the employee ID (EmpID).
Method: DELETE
Response: Success message or error message.

5.Get Specific Data - GET Request: /:empID/fetch
This route is used to retrieve specific data for a particular employee by providing the employee ID (empID).
Method: GET
Response: Data of the specified employee or an error message.


Database Used
The INFOWARE CRUD project utilizes the MYSQL database for data storage and retrieval. MYSQL is a widely used relational database management system that offers robust features for managing and organizing data.

Please ensure that a MYSQL database is set up and configured properly before running the INFOWARE CRUD project.

Feel free to refer to this documentation for information about the available routes and the database used in the INFOWARE CRUD project.  