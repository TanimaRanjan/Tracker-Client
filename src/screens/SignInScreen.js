import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer';

const SignInScreen = ({navigation}) => {

    return (
        <View>

        <Spacer><Text h4
        style={style.textStyle}
        >Sign In for Tracker</Text></Spacer>
       
        <Spacer><Input 
            label="Email Address"
            placeholder="email"   
        /></Spacer>

        <Spacer><Input 
            label="Password"
            placeholder="password"
        /></Spacer>

        <Spacer><Button 
            title="Go to Sign Up" 
            onPress={() => navigation.navigate('SignUp')} 
        /></Spacer>

        <Spacer>
            <Button 
            title="Sign In" 
            onPress={() => navigation.navigate('mainFlow')} 
        /></Spacer>
        </View>
    )
}

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

export default SignInScreen