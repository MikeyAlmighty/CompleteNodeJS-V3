const geo = require('./utils/geocode')
const weather = require('./utils/weather')

const address = process.argv[2]

if (!address){
console.log('Please provide a valid address!');
}else {
    geo.geoCode(address, (error, {lat, lng, location}) => {
        if (error) {
         return console.log(error);
        }
        weather.getWeather(lat,lng,(error, weatherData) => {
            if(error){
                return console.log(error);
            }
    
            console.log(location);
            console.log(weatherData);
        })
    })
}