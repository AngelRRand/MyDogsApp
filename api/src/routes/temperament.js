const express = require('express');
const temperament = express.Router();
const { allTemp } = require('../controllers/controlsTemp');


temperament.use(express.json());

temperament.get('/', async (req, res, next)=>{
    try {
        
        let temperaments = await allTemp()
        return res.status(200).send(temperaments)
    } catch (error) {
        next()
        return res.send(console.log(error))
    }
})

module.exports = temperament; 





