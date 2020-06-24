import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

const SignUpScreen = ({navigation}) => {

    return (
        <View style={style.viewStyle}>
            <Text>SignUpScreen
            </Text>
            <Button 
                title="Go to Sign In" 
                onPress={() => navigation.navigate('SignIn')} 
            />
            <Button 
                title="Go to main flow In" 
                onPress={() => navigation.navigate('mainFlow')} 
        />
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
        margin:20
    },
    textStyle: {
        
    }
})

export default SignUpScreen