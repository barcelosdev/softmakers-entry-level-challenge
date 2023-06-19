const Pet = require('../models/pet.model');
const { Op } = require('sequelize');
const { handleLimit, handleOffset } = require('../utils/pagination');
const { generateCode } = require('../utils/global');

exports.create = async (req, res) => {
    try {
        await Pet.create({
            code: generateCode(),
            name: req.body.name,
            animalType: req.body.animalType,
            breed: req.body.breed,
            sex: req.body.sex,
            age: req.body.age,
            colors: req.body.colors,
            height: req.body.height,
            weight: req.body.weight
        })

        res.status(201).json({ message: "Pet created sucessfully" })
    } catch (err) {
        console.log("Error creating a new pet: ", err)
        res.status(500).json({ error: err.message })
    }
}

exports.findAll = async (req, res) => {
    try {
        const totalRecords = await Pet.count();
        const pageNumber = parseInt(req.query.page);
        const filters = {};
        const options = {};


        if (req.query.animalType)
            filters.animalType = req.query.animalType;

        if (req.query.sex)
            filters.sex = req.query.sex;

        if (req.query.name)
            filters.name = { [Op.like]: `%${req.query.name}%` };

        if (req.query.code)
            filters.code = { [Op.like]: `%${req.query.code}%` };


        options.where = filters;
        options.limit = handleLimit(req.query.limit, totalRecords);
        options.offset = handleOffset(req.query.page, options.limit);
        options.order = [['createdAt', 'DESC']]


        const data = await Pet.findAll(options);

        const pagination = {
            total: totalRecords,
            limit: options.limit,
            offset: options.offset,
            total_pages: Math.ceil(totalRecords / options.limit),
            current_page: pageNumber
        }

        return res.status(200).json({ pagination, data })
    } catch (error) {
        console.log("Error finding queried pets:", error)
    }
}

exports.findById = async (req, res) => {
    try {
        const pet = await Pet.findOne({
            where: {
                id: req.params.id
            }
        })

        if (pet) {
            res.status(200).json({ data: pet });
        } else {
            res.status(204).json({ message: "No content" });
        }
    } catch (error) {
        console.log("Error finding a pet: ", error)
    }
}

exports.update = (async (req, res) => {
    try {
        const pet = await Pet.findOne({
            where: {
                id: req.params.id
            }
        })

        if (pet) {
            await Pet.update(
                {
                    name: req.body.name,
                    animalType: req.body.animalType,
                    breed: req.body.breed,
                    sex: req.body.sex,
                    age: req.body.age,
                    colors: req.body.colors,
                    height: req.body.height,
                    weight: req.body.weight,
                },
                {
                    where: {
                        id: pet.id
                    }
                }
            )

            res.status(200).json({ message: "Pet register has been updated" });
        } else {
            res.status(204).json({ message: "Pet was not found at the database" });
        }
    } catch (error) {
        console.log("Error finding a pet: ", error)
    }
})

exports.destroy = (async (req, res) => {
    try {
        const data = await Pet.destroy({
            where: {
                id: req.params.id
            }
        })

        if (data) {
            res.status(200).json({ message: "Pet register has been deleted." });
        } else {
            res.status(204).json({ message: "Pet was not found at the database" });
        }
    } catch (error) {
        console.log("Error deleting register: ", error);
    }
})
