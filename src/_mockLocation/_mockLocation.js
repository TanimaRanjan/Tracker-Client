import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001

const MY_LAT =40.7246703
const MY_LNG=-73.9511656

const getLocation = increment => {
    return {
        timestamp:10000000,
        coords: {
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            longitude:40.7246703 + increment * tenMetersWithDegrees,
            latitude:-73.9511656 + increment * tenMetersWithDegrees,
        }
    }
}


let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanges', {
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++
}, 1000)
