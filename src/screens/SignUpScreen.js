import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

const SignUpScreen = ({navigation}) => {

    return (
        <>
            <Text>SignUpScreen
            </Text>
            <Button 
            title="Go to signIn" 
            onPress={() => navigation.navigate('SignIn')} 
            />
        </>
    )
}

const style = StyleSheet.create({
    viewStyle: {

    },
    textStyle: {
        
    }
})

export default SignUpScreen