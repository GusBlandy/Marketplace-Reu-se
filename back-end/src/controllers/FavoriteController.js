const { response } = require('express');
const Product = require('../models/Product');
const User = require('../models/User');

const addProducts = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        await user.addFavoriting(product);
        return res.status(200).json('Produto adicionado a lista de favoritos');
    }catch(err){
        return res.status(500).json({err});
    }
};

const removingProducts = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        await user.removeFavoriting(product);
        return res.status(200).json('Produto removido da lista de favoritos');
    }catch(err){
        return res.status(500).json({err});
    }
};

const listFavorites = async(req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const listFavorites = await user.getFavoriting();
        return res.status(200).json({ listFavorites });
    } catch(err) {
        return res.status(500).json({err});
    }
};

module.exports = {
    addProducts,
    removingProducts,
    listFavorites
};
