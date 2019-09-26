import jwt from 'jsonwebtoken';
import {jwtdata} from '../../commonHelper';
import Joi from 'joi';

export default {
    // route middleware to verify a token
    addUser: {
        body: {
            name: Joi.string().required(),
            dob: Joi.date().required(),
            email: Joi.string().required(),
            gender: Joi.number().required(),
            budget: Joi.number().required()
        }
    },

    updateUser: {
        body: {
            name: Joi.string().required(),
            dob: Joi.date().required(),
            email: Joi.string().required(),
            gender: Joi.number().required(),
            budget: Joi.number().required()
        }
    }

};
