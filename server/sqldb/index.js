/**
 * Sequelize initialization module
 */
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
    Sequelize,
    sequelize: new Sequelize(config.sequelize.dbName, config.sequelize.userName, config.sequelize.password,
        {
            host: config.sequelize.host, dialect: config.sequelize.dialect,
            port: config.sequelize.port,
            logging: false,
            pool: {
                max: 20,
                min: 0,
                idle: 20000
            },
            operatorsAliases: false
        })
};

// Insert models below
db.Thing = db.sequelize.import('../api/model/thing.model');
db.User = db.sequelize.import('../api/model/user.model');

module.exports = db;
