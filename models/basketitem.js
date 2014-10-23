/*jslint node: true */
'use strict';

module.exports = function (sequelize, DataTypes) {
    var BasketItem = sequelize.define('BasketItems', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: DataTypes.INTEGER
    });
    return BasketItem;
};