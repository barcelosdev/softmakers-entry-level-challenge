const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

const Pet = sequelize.define('Pet', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    code: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    animalType: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    colors: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    height: {
        type: DataTypes.FLOAT,
    },
    weight: {
        type: DataTypes.FLOAT
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
})

module.exports = Pet;