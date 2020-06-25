import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView , {Marker , Polyline} from 'react-native-maps'
const Map = () => {

    let points = []
    for(let i=0;i<20;i++) {
        if(i%2 ==0)  {
            points.push(
                {
                    latitude:40.692532 + i* 0.001,
                    longitude:-73.990997 + i * 0.001
                }
            )
        } else {
            points.push(
                {
                    latitude:40.692532 - i* 0.001,
                    longitude:-73.990997 + i * 0.002
                }
            )
        }   
        
    }
    

    return (
        <MapView style={styles.mapStyle} 
        initialRegion={{
            latitude: 40.692532,
            longitude: -73.990997,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          >
          
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