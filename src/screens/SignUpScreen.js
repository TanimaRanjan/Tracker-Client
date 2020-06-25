import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context  as AuthContext } from '../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = ({navigation}) => {

    const { state, signup } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     console.log(state)
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


            {state.errorMessage ? 
                <Text style={style.errorMessage}>{state.errorMessage}</Text> : null }

            <Spacer><Button 
                title="Sign Up" 
                onPress={() => signup({email, password})}              
            /></Spacer>

            <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}>
                <Spacer>
                <Text style={style.linkStyle}>Already have an account ? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>

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
    },
    errorMessage: {
        textAlign:"center",
        color:'red',
        fontSize:18
    }, 
    linkStyle : {
        textAlign:"center",
        color:'blue',
        fontSize:18
    }
})

export default SignUpScreen