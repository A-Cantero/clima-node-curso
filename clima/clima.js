const axios = require('axios')

const getTemperatura = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eabde265588e1738bea6191a9cad451c&units=metric`)

    //console.log(resp.data.main.temp);

    return resp.data.main.temp + `Cº`;
}

module.exports = { getTemperatura }