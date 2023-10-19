module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,

        },
        // DEFINE YOUR MODEL HERE
    });
  
    return Contact;
};