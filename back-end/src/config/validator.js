const { body } = require('express-validator');

const validationUser = (method) => {
    switch(method) {
        case 'create': {
            return [
                body('email').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa exemplo@exemplo.com'),
                body('date_of_birthday').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isDate().withMessage('Precisa YYYY/MM/DD'),
                body('name').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('CPF').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('phone_number').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('payment_method').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('name_pet').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('pet_type').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
            ]
        };
        case 'update': {
            return [
                body('email').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa exemplo@exemplo.com'),
                body('date_of_birthday').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isDate().withMessage('Precisa YYYY/MM/DD'),
                body('name').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('CPF').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('phone_number').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('payment_method').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('name_pet').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('pet_type').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
            ]
        };
    }
}

const validationAddress = (method) => {
    switch(method) {
        case 'create': {
            return [
                body('state').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('city').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('road').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('number').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('CEP').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
            ]
        };
        case 'update': {
            return [
                body('state').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('city').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('road').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('number').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
                body('CEP').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isString().withMessage('Preencha com caracteres válidos'),
            ]
        };      
    }
}

const validationProduct = (method) => {
    switch(method) {
        case 'create': {
            return [
                body('name').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('color').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('price').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('inventory').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('evaluation').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
            ]
        };
        case 'update': {
            return [
                body('name').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('color').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('price').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('inventory').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('evaluation').exists().withMessage("This Field mustn't null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
            ]
        };
    }
}

module.exports = {
    validationAddress,
    validationUser,
    validationProduct
}

