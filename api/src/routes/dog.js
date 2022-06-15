const express = require('express');
const dogs = express.Router();
const { allDogs,  postDogs  } = require('../controllers/controlsDogs.js');
const { Temperament, Dog } = require('../db');

dogs.use(express.json());

dogs.get('/', async (req, res, next) => {
    const name = req.query.name
    console.log(name)
    try {
        let dogs = await allDogs();
        if (name) {
            let dogsfilter = await dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
            console.log(dogsfilter)
            if (dogsfilter.length > 0) {
                return res.status(200).json(dogsfilter)
            } else {
                return res.status(400).send(console.log('error, no exite el filtrado'))
            }
        }
        console.log('try')
        return res.send(dogs)
    } catch (error) {
        next(error)
        return res.send(console.log('error'))
    }
});

dogs.get('/:idRaza', async (req, res, next) => {
    const { idRaza } = req.params;
    console.log(idRaza)
    if (!idRaza) {
        return res.status(400).send(console.log('no se encontro ese id'));
    } else {
        try {
            let dogs = await allDogs();
            let dogParams = dogs.find(dog => dog.id.toString() === idRaza);
            res.status(200).json(dogParams);
        } catch (error) {
            next(error);
            return res.send(console.log('error en el params'));
        }
    }
});



dogs.post('/', async (req, res, next) => {
    var {
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperament,
        image,
    } = req.body;

    try {
        await postDogs(weight_min, weight_max, height_min, height_max, name, life_span, temperament, image)
        res.status(200).send('UN NUEVO PERRO A NASIDO')
    } catch (error) {
        next(error)
        res.status(400).send('no se pudo subir el pichichu')
    }

})







/* dogs.post('/', async (req, res) => {
    var {
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperament,
        image,
    } = req.body;

    console.log(name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperament,
        image)

    if (name && height_min && height_max && weight_min && weight_max && temperament && image) {

        const createDog = await Dog.create({
            name: name,
            height_min: parseInt(height_min),
            height_max: parseInt(height_max),
            weight_min: parseInt(weight_min),
            weight_max: parseInt(weight_max),
            life_span: life_span,
            image: image || 'https://dog.ceo/api/breeds/image/random',
        });
        let temp = [temperament]
        temp.map(async el => {
            const findTemp = await Temperament.findAll({
                where: { name: el }
            });
            createDog.addTemperament(findTemp);
        })
        res.status(200).send(createDog);
    } else {
        res.status(404).send('hubo un problema');
    }
}) */



module.exports = dogs;
















