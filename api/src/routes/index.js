require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;
const dogs = require('./dog');
const temperaments = require('./temperament');
const { tempBd } = require('../controllers/controlsTemp');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/temperaments', temperaments);



module.exports = router;
