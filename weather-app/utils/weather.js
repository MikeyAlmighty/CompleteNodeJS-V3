const request = require('request')

const getWeather = (lat,lng,callBack) =>{
    const weatherURL = 'https://api.darksky.net/forecast/273a81179370a724dcf7b901683d6084/' + lat + ',' + lng + '?units=auto'
    request({url:weatherURL, json:true}, (error,resp,{daily, currently,err}) => {
        if (error){
            callBack('Unable to connect to weather service!',undefined);
        } else if (err){
            callBack('Unable to retrieve weather information!',undefined);
        } else {
            callBack(undefined,daily.data[0].summary + " It's currently: " + currently.temperature + " degrees. There is a " + currently.precipProbability + "% chance of rain.");
        }
    })
}

module.exports = {
    getWeather:getWeather
}