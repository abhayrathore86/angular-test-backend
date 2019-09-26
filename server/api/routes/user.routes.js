let express = require('express');
let controller = require('../controller/user.controller');
import validations from './validation';
import validate from 'express-validation';
import {errorJsonResponse} from '../../commonHelper';

let router = express.Router();

router.get('/', controller.index);
router.post('/', validate(validations.addUser), controller.addUser);
router.delete('/:id', controller.deleteUser);
router.put('/:id', validate(validations.updateUser), controller.updateUser);


router.use(function (err, req, res, next) {
    let allErrorField = [];
    for (let i = 0; i < err.errors.length; i++) {
        let Single_Object = {
            Error: err.errors[i].messages.toString().replace(/"/g, '')
        };
        allErrorField.push(Single_Object);
    }
    res.status(400).json(errorJsonResponse(allErrorField, allErrorField));
});

module.exports = router;
