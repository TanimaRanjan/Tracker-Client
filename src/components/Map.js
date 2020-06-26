import React, { useContext } from 'react'
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import MapView , {Marker , Polyline, Circle} from 'react-native-maps'
import {Context as LocationContext } from '../context/LocationContext'

// const MY_LAT=40.724670
// const MY_LNG=-73.9511656

const Map = () => {

    const {state : {currentLocation } , addLocation } = useContext(LocationContext)

//    console.log(currentLocation?.coords?.latitude, currentLocation?.coords?.longitude) 

    if(!currentLocation) {
        return <ActivityIndicator  size="large" style={{marginTop: 200 }} />
    }

    return (
        <MapView style={styles.mapStyle} 
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        //   region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.1,
        //     longitudeDelta: 0.1
        //   }}
          >
          <Marker coordinate={{ latitude:  currentLocation?.coords?.latitude, longitude: currentLocation?.coords?.longitude }} />
            <Circle 
               center={currentLocation.coords}
               radius={120}
               strokeColor="rgba(158,158,255,1.0)"
               fillColor="rgba(158,158,255, 0.3)"
            />
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


        <Polyline coordinates={points} />
          </MapView>*/