const axios = require('axios')
const KEY = process.env.API_KEY;
const { Temperament } = require('../db');


const tempApi = async () => {
    const ApiGet = await axios.get(`https://api.thedogapi.com/v1/breeds?${KEY}`);
    let ApiInfo = await ApiGet.data.map(d => {
        return d.temperament
    }).flatMap(dog => dog?.split(', '))
    //console.log(ApiInfo)
    let temSet = [...new Set(ApiInfo)]
    //console.log(temSet);
    //let temperament = [...new Set(ApiInfo.flat())];
    //console.log(temperament)
    //'happy',
    temSet.forEach(element => {
        if(element){
            Temperament.findOrCreate({
                where: { name: element }
            })
        }
    });
}


/* const tempBd = async () => {
    let tempApi  = await tempApi()
        ///insertar en la base de datos
        console.log(tempApi)
        tempApi.forEach(element => {
            
            Temperament.findOrCreate({
                where: { name: element }
            })
        });
    
} */


const allTemp = async () =>{

    let tempAll = await Temperament.findAll()
    return tempAll
} 
//console.log(tempApi())

module.exports = {tempApi, allTemp}; 
