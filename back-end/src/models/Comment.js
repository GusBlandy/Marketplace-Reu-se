const Datatypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Comment = sequelize.define('Comment', {
    text: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    evaluation: {
        type: Datatypes.DOUBLE,
        allowNull: false
    },   
});


Comment.associate = function (models) {
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Product)
};


module.exports = Comment;
