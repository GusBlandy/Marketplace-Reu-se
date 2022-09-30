const Datatypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Address = sequelize.define('Address', {
    state: {
        type: Datatypes.STRING,
        allowNull: false
    },
    city: {
        type: Datatypes.STRING,
        allowNull: false
    },
    road: {
        type: Datatypes.STRING,
        allowNull: false
    },
    number: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    CEP: {
        type: Datatypes.STRING,
        allowNull: false
    },
});


Address.associate = function (models) {
    Address.hasMany(models.User)
};


module.exports = Address;
