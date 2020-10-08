import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Text } from 'react-native-elements'
const TrackDetailScreen = () => {
    return (
        <View>
            <Text h4 style={style.textStyle}>Track Detail
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {

    },
    textStyle: {
        textAlign:'center',
        marginTop:30
    }
})

export default TrackDetailScreen
