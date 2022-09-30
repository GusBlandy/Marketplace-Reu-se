const { validationResult } = require('express-validator');
const { response } = require('express');
const User = require('../models/User');
const Address = require('../models/Address');
const Auth = require('../config/Auth');

// const create = async(req, res) => {
//     try {
//         validationResult(req).throw();
//         const user = await User.create(req.body);
//         return res.status(200).json({message: "Usuário cadastrado com sucesso!", user: user});
//     } catch(err) {
//         return res.status(500).json({error: err});
//     }
// };

const create = async(req, res) => {
    try{

        validationResult(req).throw();
        const { password } = req.body;
        const HashSalt = Auth.generatePassword(password);
        const salt = HashSalt.salt;
        const hash = HashSalt.hash;
        const newUser = {
            name: req.body.name,
            CPF: req.body.CPF,
            phone_number: req.body.phone_number,
            email: req.body.email,
            payment_method: req.body.payment_method,
            date_of_birthday: req.body.date_of_birthday,
            moderator: req.body.moderator,
            pet_type: req.body.pet_type,
            name_pet: req.body.name_pet,
            photograph: req.body.photograph,
            hash: hash,
            salt: salt
        };
        const user = await User.create(newUser);
        return res.status(200).json({message: "Usuário cadastrado com sucesso!", user: user});
      }catch(err){
          res.status(500).json({error: err});
      }
};


const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

const index = async(req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({users})
    } catch (err) {
        return res.status(500).json({error: err});
    }
};

const update = async(req, res) => {
    const {id} = req.params;
    try {
        validationResult(req).throw();
        const [updated] = await User.update(req.body, {where: {id:id}});
        if (updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        }
        throw new Error();
    } catch(err) {
        return res.status(500).json({error: err});
    }
};

const destroy = async(req, res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id:id}});
        if (deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    } catch(err) {
        return res.status(500).json("Usuário não encontrado");
    }
};

const addAddress = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const address = await Address.findByPk(req.body.AddressId);
        await user.addAddress(address);
        return res.status(200).json('Endereço cadastrado.');
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
    addAddress
};
