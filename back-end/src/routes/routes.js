const { Router } = require('express');
const router = Router();
const CartController = require('../controllers/CartController');
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const CommentController = require('../controllers/CommentController');
const FavoriteController = require('../controllers/FavoriteController');
const AddressController = require('../controllers/AddressController');
const moderMiddleware = require('../middlewares/moder');
const validator = require('../config/validator');

//Authentication uses
const AuthController = require("../controllers/AuthController");
const passport = require("passport");
router.use("/private", passport.authenticate('jwt', {session: false}));

//Authentication routes
router.post("/login", AuthController.login);
router.get("/private/getDetails", AuthController.getDetails);

//Address
router.get('/addresses', AddressController.index);
router.get('/addresses/:id', AddressController.show);
router.post('/addresses', validator.validationAddress('create'), AddressController.create);
router.put('/addresses/:id', validator.validationAddress('update'), AddressController.update);
router.delete('/addresses/:id', AddressController.destroy);

//Cart
router.put('/private/cart/:id', CartController.Purchase);
router.put('/private/cancel/cart/:id', CartController.cancelPurchase);
router.get('/private/cart/:id', CartController.listCart);

//Product
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.post('/private/products',validator.validationProduct('create'), ProductController.create);
router.put('/private/products/:id', validator.validationProduct('update'), ProductController.update);
router.delete('/private/products/:id', ProductController.destroy);

//User
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/users', validator.validationUser('create'), UserController.create);
router.put('/users/:id', validator.validationUser('update'), UserController.update);
router.delete('/users/:id', UserController.destroy);

//Comment
router.get('/comments', CommentController.index);
router.get('/comments/:id', CommentController.show);
router.post('/private/comments', CommentController.create);
router.put('/private/comments/:id', CommentController.update);
router.delete('/private/comments/:id', CommentController.destroy);
router.put('/private/comments/:id', CommentController.postingComment);
router.put('/private/comments/remove/:id', CommentController.removingComment);
router.get('/private/comments/:id', CommentController.listComments);

//Favorite
router.put('/private/favorites/:id', FavoriteController.addProducts);
router.put('/private/favorites/remove/:id', FavoriteController.removingProducts);
router.get('/private/favorites/:id', FavoriteController.listFavorites);

module.exports = router;
