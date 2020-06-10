const argv = require('../config/yargs').argv
const axios = require('axios')

const getLugarLatLng = async(direccion, pais) => {

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${direccion},${pais}&units=metric`,
        headers: {
            'X-RapidAPI-Key': '41656f2218msh2ea6c4e06557785p1b3140jsnb2e2afebe6a8'
        }
    })

    const resp = await instance.get();

    if (resp.data.cod.toString() === `404`) {
        throw new Error(`No se encontró la ciudad`);
    }
    const dir = resp.data.name
    const lat = resp.data.coord.lat
    const lon = resp.data.coord.lon

    return {
        dir,
        lat,
        lon
    }

}

module.exports = { getLugarLatLng }