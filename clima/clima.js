


const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c99d155779336caa297b010394eb2994&units=metric`)
    return resp.data.main.temp;

}





module.exports = {

    getClima
}