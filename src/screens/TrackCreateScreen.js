// import '../_mockLocation/_mockLocation'

import React, { useEffect , useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map'
import Spacer from '../components/Spacer'



const TrackCreateScreen = () => {

    const [error, setError ] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();

          await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval:1000,
              distanceInterval:1
          }, (location) => {
              console.log('MY LOCATION ',location)
          })


          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (error) {
            setError(error);
        }
      };

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{top:'always'}} >
        <Spacer>
            <Text h4 style={style.textStyle}>TrackCreateScreen
            </Text>
        </Spacer>
            <Map />
            {error ? <Text>Please enable location services </Text> : null }
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
    },
    textStyle: {
        textAlign:'center',
        marginTop:30
    }
})

export default TrackCreateScreen


