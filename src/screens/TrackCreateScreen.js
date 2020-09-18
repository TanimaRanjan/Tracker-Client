import '../_mockLocation/_mockLocation'
import React, { useContext , useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import Map from '../components/Map'
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {

    const { state: {recording, locations}, addLocation } = useContext(LocationContext)

    const callback = useCallback((location) => addLocation(location, recording), [recording])

    const [error] = useLocation(isFocused || recording,  callback)

    console.log(locations.length)

    return (
        <SafeAreaView forceInset={{top:'always'}} >
        <Spacer>
            <Text h4 style={style.textStyle}>TrackCreateScreen
            </Text>
        </Spacer>
            <Map />
            {error ? <Text>Please enable location services </Text> : null }
            <TrackForm />
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

export default withNavigationFocus(TrackCreateScreen)


