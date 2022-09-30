const { response } = require('express');
const Product = require('../models/Product');
const User = require('../models/User');

const create = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).json({message: "Produto cadastrado com sucesso!", product: product});
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        return res.status(200).json({product});
    }catch(err){
        return res.status(500).json({err});
    }
};

const index = async(req, res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json({products})
    } catch (err) {
        return res.status(500).json({error: err});
    }
};

const update = async(req, res) => {
    const {id} = req.params;
    try {
        const [updated] = await Product.update(req.body, {where: {id:id}});
        if (updated) {
            const product = await Product.findByPk(id);
            return res.status(200).send(product);
        }
        throw new Error();
    } catch(err) {
        return res.status(500).json({error: err});
    }
};

const destroy = async(req, res) => {
    const {id} = req.params;
    try {
        const deleted = await Product.destroy({where: {id:id}});
        if (deleted) {
            return res.status(200).json("Produto deletado com sucesso.");
        }
        throw new Error ();
    } catch(err) {
        return res.status(500).json("Produto não encontrado");
    }
};

const postingProduct = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        await user.setProduct(product);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err});
    }
};

const removingProduct = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        await user.setProduct(null);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err});
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    postingProduct,
    removingProduct
};
