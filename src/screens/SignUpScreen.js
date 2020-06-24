import React, { useState } from 'react'

import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import Spacer from '../components/Spacer';

const SignUpScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log('Print ', email, password)
   // useEffect()    

     return (
        <View style={style.viewStyle}>

            <Spacer><Text h4
            style={style.textStyle}
            >Sign Up for Tracker</Text></Spacer>
           
            <Spacer>
                <Input 
                    label="Email Address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"   
                    value={email}
                    onChangeText={setEmail}
                />
            </Spacer>

            <Spacer>
                <Input 
                    secureTextEntry
                    label="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}

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
        justifyContent:"center",
        // alignContent:"center",
      //  marginTop:80
      marginTop:-180
    },
    textStyle: {
        textAlign:"center"
    }
})

export default SignUpScreen