const { validationResult } = require('express-validator');
const { response } = require('express');
const Address = require('../models/Address');

const create = async(req, res) => {
    try {
        validationResult(req).throw();
        const address = await Address.create(req.body);
        return res.status(200).json({message: "Endereço cadastrado com sucesso!", address: address});
    } catch(err) {
        return res.status(500).json({error: err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const address = await Address.findByPk(id);
        return res.status(200).json({address});
    }catch(err){
        return res.status(500).json({err});
    }
};

const index = async(req, res) => {
    try {
        const addresses = await Address.findAll();
        return res.status(200).json({adresses})
    } catch (err) {
        return res.status(500).json({error: err});
    }
};

const update = async(req, res) => {
    const {id} = req.params;
    try {
        const [updated] = await Address.update(req.body, {where: {id:id}});
        if (updated) {
            const address = await Address.findByPk(id);
            return res.status(200).send(address);
        }
        throw new Error();
    } catch(err) {
        return res.status(500).json({error: err});
    }
};

const destroy = async(req, res) => {
    const {id} = req.params;
    try {
        const deleted = await Address.destroy({where: {id:id}});
        if (deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    } catch(err) {
        return res.status(500).json("Usuário não encontrado");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
