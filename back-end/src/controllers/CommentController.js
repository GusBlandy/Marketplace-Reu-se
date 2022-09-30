const { response } = require('express');
const Comment = require('../models/Comment');
const User = require('../models/User');

const create = async(req, res) => {
    try {
        const comment = await Comment.create(req.body);
        return res.status(200).json({message: "Comentário enviado com sucesso!", comment: comment});
    } catch(err) {
        return res.status(500).json({error: err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        return res.status(200).json({comment});
    }catch(err){
        return res.status(500).json({err});
    }
};

const index = async(req, res) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json({comments})
    } catch (err) {
        return res.status(500).json({error: err});
    }
};

const update = async(req, res) => {
    const {id} = req.params;
    try {
        const [updated] = await Comment.update(req.body, {where: {id:id}});
        if (updated) {
            const comment = await Comment.findByPk(id);
            return res.status(200).send(comment);
        }
        throw new Error();
    } catch(err) {
        return res.status(500).json({error: err});
    }
};

const destroy = async(req, res) => {
    const {id} = req.params;
    try {
        const deleted = await Comment.destroy({where: {id:id}});
        if (deleted) {
            return res.status(200).json("Comentário deletado com sucesso.");
        }
        throw new Error ();
    } catch(err) {
        return res.status(500).json("Comentário não encontrado");
    }
};

const postingComment = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        const user = await User.findByPk(req.body.UserId);
        await comment.setUser(user);
        return res.status(200).json('Comentário postado.');
    }catch(err){
        return res.status(500).json({err});
    }
};

const removingComment = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        await comment.setUser(null);
        return res.status(200).json('Comentário removido.');
    }catch(err){
        return res.status(500).json({err});
    }
};

const listComments = async(req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const listComment = await user.getComments();
        return res.status(200).json({ listComment });
    } catch(err) {
        return res.status(500).json({err});
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    postingComment,
    removingComment,
    listComments
};
