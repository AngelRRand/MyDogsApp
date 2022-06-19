const express = require('express');
const temperament = express.Router();
const { allTemp, tempApi } = require('../controllers/controlsTemp');
const { allDogs } = require('../controllers/controlsDogs');


temperament.use(express.json());

temperament.get('/', async (req, res, next)=>{
    try {
        await tempApi()
        let temperaments = await allTemp()
        //console.log(temperaments)
        return res.status(200).send(temperaments)
    } catch (error) {
        return res.send(console.log('routes error'))
    }
})

temperament.get('/filter/', async (req, res) => {
    const temperament = req.query.temperament;
    const everyDog = await allDogs();
    const dogSearchResult = everyDog.filter((dog) => {
        if (temperament === 'all') return everyDog
        else if (dog.temperaments) {
            //console.log(dog.temperaments)
            if(typeof dog.temperaments === "object"){
                //console.log(dog.temperaments)
                let temp = dog.temperaments.map(temp => {return temp.name})
                console.log(temp.toString().toLowerCase().includes(temperament.toLowerCase()))
                return (temp.toString().toLowerCase()).includes(temperament.toLowerCase())
            }
            //console.log(dog.temperaments)
            return (dog.temperaments.toLowerCase()).includes(temperament.toLowerCase())
        }
    });
    res.status(200).json(dogSearchResult)
});
module.exports = temperament; 





