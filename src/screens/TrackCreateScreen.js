import '../_mockLocation/_mockLocation'

import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
// import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'
import Map from '../components/Map'
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = () => {

   
    const { addLocation } = useContext(LocationContext)

    const [error] = useLocation(addLocation)

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


