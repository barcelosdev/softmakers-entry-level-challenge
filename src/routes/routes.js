const router = require('express').Router();
const { create, findAll, findById, update, destroy } = require('../controllers/pet.controller');
const { fakerData } = require('../utils/faker');

router.route('/pets')
    .post(create)
    .get(findAll)

router.route('/pets/:id')
    .get(findById)
    .put(update)
    .delete(destroy)

router.post('/faker', fakerData)

module.exports = router