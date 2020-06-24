import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

const SignInScreen = ({navigation}) => {

    return (
        <View>
            <Text>SignInScreen
            </Text>
            <Button 
            title="Go to Sign Up" 
            onPress={() => navigation.navigate('SignUp')} 
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

export default SignInScreen