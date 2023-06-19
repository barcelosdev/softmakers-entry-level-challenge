const { faker } = require('@faker-js/faker');
const { generateCode } = require('./global');
const Pet = require('../models/pet.model');

exports.fakerData = async (req, res) => {
    try {
        for (let i = 0; i < 200; i++) {
            const name = faker.person.firstName();
            const animalType = faker.helpers.arrayElement(
                [
                    'Cachorro',
                    'Gato',
                    'Papagaio',
                    'Calopsita',
                    'Periquito',
                    'Canário',
                    'Hamster',
                    'Porquinho-da-índia'
                ]
            );


            const breed = breedOptions(animalType).toString();
            const sex = faker.helpers.arrayElement(['M', 'F']);
            const age = faker.number.int(20);
            const colors = faker.color.human();
            const height = faker.number.float({ min: 20, max: 150 }).toFixed(2);
            const weight = faker.number.float({ min: 5, max: 30 }).toFixed(2);

            await Pet.create({
                code: generateCode(),
                name: name,
                animalType: animalType,
                breed: breed,
                sex: sex,
                age: age,
                colors: colors,
                height: height,
                weight: weight
            });

        }

        res.status(201).json({ message: 'Random data has been created' });
    } catch (error) {
        console.log(error.message);
    }
}

function breedOptions(type) {
    switch (type) {
        case 'Cachorro':
            return faker.helpers.arrayElement(
                [
                    'Vira-lata',
                    'Labrador Retriever',
                    'Pastor Alemão',
                    'Golden Retriever',
                    'Bulldog Inglês',
                    'Poodle',
                    'Beagle',
                    'Boxer',
                    'Pitbull',
                    'Salsicha'
                ]
            );
        case 'Gato':
            return faker.helpers.arrayElement(
                [
                    'SRD',
                    'Siamese',
                    'Persa',
                    'Bengala',
                    'Sphynx',
                    'Ragdoll',
                    'Russian Blue',
                    'British Shorthair',
                    'Maine Coon',
                    'Frajola'
                ]
            )
        case 'Papagaio':
            return faker.helpers.arrayElement(
                [
                    'Arara',
                    'Cacatua',
                    'Papagadio-do-congo',
                    'Amazona',
                    'Calopsita',
                ]
            )
        case 'Calopsita':
            return faker.helpers.arrayElement(
                [
                    'Calopsita-cinza',
                    'Calopsita-amarela',
                    'Calopsita-branca',
                    'Calopsita-canela',
                    'Calopsita-lunita',
                ]
            )
        case 'Periquito':
            return faker.helpers.arrayElement(['Periquito-australiano', 'Periquito-inglês'])
        case 'Canário':
            return faker.helpers.arrayElement(['Canário-belga', 'Canário-da-terra'])
        case 'Hamster':
            return faker.helpers.arrayElement(
                [
                    'Hamster-sírio',
                    'Hamster-anão-russo',
                    'Hamster-roborovski',
                    'Hamster-chinês'
                ]
            )
        case 'Porquinho-da-índia':
            return faker.helpers.arrayElement(
                [
                    'Pelo-longo',
                    'Pelo-curto',
                    'Pelo-ruivo'
                ]
            );
        default:
            return '';
    }
}