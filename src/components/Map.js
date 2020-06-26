import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView , {Marker , Polyline} from 'react-native-maps'

const MY_LAT=40.724670
const MY_LNG=-73.9511656

const Map = () => {

    let points = []
    for(let i=0;i<20;i++) {
        if(i%2 ==0)  {
            points.push(
                {
                    latitude:MY_LAT + i* 0.00001,
                    longitude:-73.9511656 + i * 0.001
                }
            )
        } else {
            points.push(
                {
                    latitude:40.724670 - i* 0.001,
                    longitude:-73.9511656 + i * 0.0002
                }
            )
        }   
    }
    

    return (
        <MapView style={styles.mapStyle} 
        initialRegion={{
            latitude: 40.724670,
            longitude: -73.9511656,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          >
          <Marker coordinate={{ latitude:  40.724670, longitude: -73.9511656, }} />
            <Polyline coordinates={points} />
          </MapView>
    )
}


const styles = StyleSheet.create({
    mapStyle: {
        height:300,
        
    }
})

export default Map


/*
 <MapView style={styles.mapStyle} 
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
          >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
        <Polyline coordinates={[Berlin, Franfurt]} />
          </MapView>*/