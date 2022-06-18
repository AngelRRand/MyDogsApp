const express = require('express');
const temperament = express.Router();
const { allTemp, tempApi } = require('../controllers/controlsTemp');


temperament.use(express.json());

temperament.get('/', async (req, res, next)=>{
    try {
        await tempApi()
        let temperaments = await allTemp()
        console.log(temperaments)
        return res.status(200).send(temperaments)
    } catch (error) {
        return res.send(console.log('routes error'))
    }
})

module.exports = temperament; 





