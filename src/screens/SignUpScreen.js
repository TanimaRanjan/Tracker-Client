import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import Spacer from '../components/Spacer';

const SignUpScreen = ({navigation}) => {

    return (
        <View >
        
            <Spacer><Text h4
            style={style.textStyle}
            >Sign Up for Tracker</Text></Spacer>
           
            <Spacer><Input 
                label="Email Address"
                placeholder="email"   
            /></Spacer>

            <Spacer><Input 
                label="Password"
                placeholder="password"
            /></Spacer>

            <Spacer><Button 
                title="Sign Up" 
                onPress={() => navigation.navigate('SignIn')} 
            /></Spacer>

        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
       // justifyContent:"space-evenly",
        // alignContent:"center",
        // margin:20
    },
    textStyle: {
        textAlign:"center"
    }
})

export default SignUpScreen