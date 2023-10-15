module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // DEFINE YOUR MODEL HERE
        name: {
            type: Sequelize.STRING,
            validate: { notEmpty: true}
        },
        number:{
            type: Sequelize.STRING,
            validate: { notEmpty: true}
        },
        contactID: {
            type: Sequelize.INTEGER,
            foreignkey: true,
        }
    });
  
    return Phone;
};