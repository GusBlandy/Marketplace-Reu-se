const Datatypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Product = sequelize.define('Product', {
    name: {
        type: Datatypes.STRING,
        allowNull: false
    },
    description: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    color: {
        type: Datatypes.STRING,
        allowNull: false
    },
    price: {
        type: Datatypes.DOUBLE,
        allowNull: false
    },
    inventory: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    evaluation: {
       type: Datatypes.INTEGER,
       allowNull: false 
    },
});


Product.associate = function (models) {
    Product.hasMany(models.Comment)
    Product.belongsTo(models.User)
    Product.belongsToMany(models.User, {through: 'cart', as: 'purchased'})
    Product.belongsToMany(models.User, {through: 'favorite', as: 'favorited'})

};

module.exports = Product;