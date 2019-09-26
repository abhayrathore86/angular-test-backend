/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 */

import {Thing} from '../../sqldb/index';
import httpResponseCode from "../../commonHelper/httpResponseStatusHelper";

// Gets a list of Things
export function index(req, res, next) {
    try {
        Thing.findAll().then((getAllThings) => {
            if (getAllThings) {
                return res.status(httpResponseCode.statusCode.Success).json(getAllThings);
            }
        }).catch((error) => {
            next(error);
        });
    } catch (error) {
        next(error);
    }
}
