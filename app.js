const argv = require('./config/yargs').argv
const axios = require('axios')
const colors = require('colors')
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const getInfo = async(ciudad, pais) => {
    try {
        const coor = await lugar.getLugarLatLng(ciudad, pais)
        const temp = await clima.getTemperatura(coor.lat, coor.lon)
        return `El clima de ${coor.dir.yellow} es de ${temp.toString().red}.`
    } catch (e) {
        return (`No se pudo determinar el clima de ${ciudad}`, e)
    }
}

getInfo(argv.direccion, argv.pais).then(console.log).catch(console.log);