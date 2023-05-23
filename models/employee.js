
module.exports = (sequelize, DataTypes) => {
    const employee  = sequelize.define("employee", {
      
        empID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        job: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        primaryEmergencyContact: {
            type: DataTypes.STRING
        },
        PEnumber: {
            type: DataTypes.STRING
        },
        PErelationship: {
            type: DataTypes.STRING
        },
        secondaryEmergencyContact: {
            type: DataTypes.STRING
        },
        SEnumber: {
            type: DataTypes.STRING
        },
        SErelationship: {
            type: DataTypes.STRING
        },
    })

    return employee
}