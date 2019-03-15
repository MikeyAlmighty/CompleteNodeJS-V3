const request = require('request')

const geoCode = (address, callBack) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?limit=1&access_token=pk.eyJ1IjoibWlrZXljb2RlcyIsImEiOiJjanQ4aWdvcG0wMTRwNDRwZ2FrdXd2cjZzIn0.fJuq-oCSI9zyRgCAxh1yJw'

    request({url:geocodeURL, json:true}, (err,resp,{features}) => {
        if(err){
            callBack('Unable to connect to location Services!', undefined)
        } else if(features[0].length){
            callBack('Unable to find location. Try another search result!',undefined)
        } else {
            callBack(undefined,{
                lat:features[0].center[1],
                lng:features[0].center[0],
                location:features[0].place_name
            })
        }
    })

}

module.exports = {
    geoCode:geoCode
}