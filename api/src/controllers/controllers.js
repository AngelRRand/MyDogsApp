const axios = require('axios')
const  KEY  = process.env.API_KEY;
const { Temperament, Dog } = require('../db');

    const allDogApi = async () =>{
        const ApiGet = await axios.get(`https://api.thedogapi.com/v1/breeds?${KEY}`)
        const ApiInfo = await ApiGet.data.map(d=>{
            return{
                weight_min: parseInt(d.weight.metric.slice(0,2).trim()),
                weight_max: parseInt(d.weight.metric.slice(4).trim()),
                height_min: parseInt(d.weight.metric.slice(0,2).trim()),
                height_max: parseInt(d.weight.metric.slice(4).trim()),
                id: d.id,
                name: d.name,
                image: d.image.url,
                life_span: d.life_span,
                temperament: d.temperament,
            }
        })

        return ApiInfo
        
    }
    const allDogsDb = async () =>{
        let bd = await Dog.findAll({
            includes:{
                attributes: ['name'],
                through: {
                    attributes: []
                },
                model: Temperament
            }
        })
    } 
    
    

module.exports = {
    allDogApi
};