import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import Spacer from '../components/Spacer'


const TrackCreateScreen = () => {

    return (
        <SafeAreaView forceInset={{top:'always'}} >
        <Spacer>
            <Text h4 style={style.textStyle}>TrackCreateScreen
            </Text>
        </Spacer>
            <Map />
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