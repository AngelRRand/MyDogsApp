const axios = require('axios')
const KEY = process.env.API_KEY;
//const { Temperament } = require('../db');


const tempApi = async () => {
    const ApiGet = await axios.get(`https://api.thedogapi.com/v1/breeds?${KEY}`);
    let ApiInfo = await ApiGet.data.map(d => {
        return d.temperament
    }).flatMap(dog => dog?.split(', '))
    //console.log(ApiInfo)
    let temSet = [...new Set(ApiInfo)]
    console.log(temSet);
    //let temperament = [...new Set(ApiInfo.flat())];
    //console.log(temperament)

    return temSet
}
const tempBd = async () => {
    const tempApi = await tempApi()
    ///insertar en la base de datos


}
console.log(tempApi())

module.exports = tempApi; 
