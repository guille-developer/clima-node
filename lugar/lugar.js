
const axios = require('axios')


const getLugatLatLng = async (dir) => {
    console.log(dir);

    const endodedUrl = encodeURI(dir)
    console.log(endodedUrl)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${endodedUrl}`,
        headers: { 'X-RapidAPI-Key': '3ce0b9496dmsh685a539b81ac095p1737d7jsnb785e137adc9' }
    });


    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`no hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0]

    const direccion = data.name
    const lat = data.lat
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }
}


module.exports={
    getLugatLatLng
}

