const { response } = require('express');
const Product = require('../models/Product');
const User = require('../models/User');

const Purchase = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        await user.addPurchasing(product);
        return res.status(200).json('Produto adicionado ao carrinho.');
    }catch(err){
        return res.status(500).json({err});
    }
};

const cancelPurchase = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        await user.removePurchasing(product);
        return res.status(200).json('Produto removido do carrinho.');
    }catch(err){
        return res.status(500).json({err});
    }
};

const listCart = async(req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const listCart = await user.getPurchasing();
        return res.status(200).json({ listCart });
    } catch(err) {
        return res.status(500).json({err});
    }
};


module.exports = {
    Purchase,
    cancelPurchase,
    listCart
};

