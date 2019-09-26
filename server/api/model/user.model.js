/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        budget: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }, {
        tableName: 'user',
        underscored: true,
        timestamps: false,
    });
};
