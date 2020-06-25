import React, { useState, useContext, Suspense } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context  as AuthContext } from '../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthForm from '../components/AuthForm';

const SignUpScreen = ({navigation}) => {

    const { state, signup } = useContext(AuthContext)

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    //  console.log(state)


     return (
        <View style={style.viewStyle}>

            <AuthForm 
                headerText='Sign Up for Tracker'
                buttonTitle='Sign Up'
                errorMessage={state.errorMessage}
                onSubmit={({email, password}) => signup({email, password})}
            
            />


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