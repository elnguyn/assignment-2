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
            allowNull: false
        },
        number:{
            type: Sequelize.STRING,
            allownull: false
        },
        contactID: {
            type: Sequelize.INTEGER,
            foreignkey: true,
        }
    });
    Phone.belongsTo(sequelize.models.Contact, {
        foreignKey: 'contactID'
    });
  
    return Phone;
};