import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text>TrackListScreen
            </Text>
            <Button title="Go to track detail" 
            onPress = {() => { 
                navigation.navigate('TrackDetail')
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {

    },
    textStyle: {
        
    }
})

export default TrackListScreen