const Datatypes = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
    name: {
        type: Datatypes.STRING,
        allowNull: false
    },
    CPF: {
        type: Datatypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: Datatypes.STRING,
        allowNull: false
    },
    payment_method: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false
    },
    date_of_birthday: {
        type: Datatypes.DATEONLY,
        allowNull: false
        
    },
    moderator: {
        type: Datatypes.BOOLEAN,
        allowNull: false

    },
    pet_type: {
        type: Datatypes.STRING,
        allowNull: false
    },
    name_pet: {
        type: Datatypes.STRING,
        allowNull: false
    },
    photograph: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    hash: {
        type: Datatypes.STRING,
    },
    salt: {
        type: Datatypes.STRING,
    },
});


User.associate = function (models) {
    User.belongsTo(models.Address)
    User.hasMany(models.Comment)
    User.hasMany(models.Product)
    User.belongsToMany(models.Product, {through: 'cart', as: 'purchasing'})
    User.belongsToMany(models.Product, {through: 'favorite', as: 'favoriting'})
};


module.exports = User;