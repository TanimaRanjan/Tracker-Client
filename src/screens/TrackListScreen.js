import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text h4 style={style.textStyle}>Track list
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
        textAlign:'center',
        marginTop:30
    }
})

export default TrackListScreen
