import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

const SignUpScreen = ({navigation}) => {

    return (
        <View style={style.viewStyle}>
            <Text>SignUpScreen
            </Text>
            <Button 
            title="Go to signIn" 
            onPress={() => navigation.navigate('SignIn')} 
            />
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        margin:20
    },
    textStyle: {
        
    }
})

export default SignUpScreen