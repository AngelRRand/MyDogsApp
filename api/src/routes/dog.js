 const express = require('express');
const dogs = express.Router();
const { allDogs } = require('../controllers/controlsDogs.js');
//const { Temperament, Dog } = require('../db');

dogs.use(express.json());

dogs.get('/', async (req, res, next) =>{
    const name = req.query.name
    try {
        let dogs = await allDogs();
        if(name){
            let dogsfilter = await dogs.filter(dog => dog.name.includes(name))
            if(dogsfilter.length){
                return res.status(200).json(dogsfilter)
            } else{
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

dogs.get('/:idRaza', async (req, res, next)=>{
    const {idRaza} = req.params;
    console.log(idRaza)
    if(!idRaza){
        return res.status(400).send(console.log('no se encontro ese id'));
    } else{
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

dogs.post('/', async(req, res, next)=>{
    
})




module.exports = dogs; 
















