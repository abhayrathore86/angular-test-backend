/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 */

import {User} from '../../sqldb/index';
import httpResponseCode from "../../commonHelper/httpResponseStatusHelper";

// Gets a list of Users
export function index(req, res, next) {
    try {
        User.findAll().then((getAllUsers) => {
            if (getAllUsers) {
                return res.status(httpResponseCode.statusCode.Success).json(getAllUsers);
            }
        }).catch((error) => {
            next(error);
        });
    } catch (error) {
        next(error);
    }
}

export function addUser(req, res, next) {
    try {
        let requestObj = {
            name: req.body.name,
            dob: req.body.dob,
            email: req.body.email,
            gender: req.body.gender,
            budget: req.body.budget,
        };

        const user = User.build(requestObj);
        user.save().then((insertedRecord) => {
            if (insertedRecord)
                return res.status(httpResponseCode.statusCode.Success).json({
                    data: insertedRecord,
                    result: "successfully added"
                });
        }).catch((error) => {
            next(error);
        });
    } catch (error) {
        next(error);
    }
}

export function deleteUser(req, res, next) {
    try {
        const id = req.params.id;
        const resultObj = {
            id,
            result: "successfully deleted"
        };
        User.destroy({where: {id: id}}).then((deletedRecord) => {
            if (deletedRecord)
                return res.status(httpResponseCode.statusCode.Success).json(resultObj);
        }).catch((error) => {
            next(error);
        })

    } catch (error) {
        next(error);
    }
}

export function updateUser(req, res, next) {
    try {
        const id = req.params.id;
        let requestObj = {
            id,
            name: req.body.name,
            dob: req.body.dob,
            email: req.body.email,
            gender: req.body.gender,
            budget: req.body.budget,
        };
        User.update(requestObj, {where: {id: id}}).then((updatedRecord) => {
            if (updatedRecord)
                return res.status(httpResponseCode.statusCode.Success).json({
                    data: requestObj,
                    result: "successfully updated"
                });
        }).catch((error) => {
            next(error);
        })
    } catch (error) {
        next(error);
    }
}
