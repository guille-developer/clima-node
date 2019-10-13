const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').option(
    {
        direccion: {
            alias: 'd',
            desc: "Direccion para obtener clima",
            demand: true
        }
    }
).argv;


//lugar.getLugatLatLng(argv.direccion).then(console.log)




const getInfo = async (direccion) => {


    try {
        const cordenadad = await lugar.getLugatLatLng(direccion)
        const climaCiudad = await clima.getClima(cordenadad.lat, cordenadad.lng)
    
        return `La temperatura de la ciudad ${cordenadad.direccion} es ${climaCiudad}`
    } catch (error) {
        'No se pudo determinar'
    }
   

}

getInfo(argv.direccion).then(console.log).catch(console.log)
