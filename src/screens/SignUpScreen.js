import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = () => {

    const { state:{errorMessage}, signup, clearErrorMessage } = useContext(AuthContext)

     return (
        <View style={style.viewStyle}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
            <AuthForm 
                headerText='Sign Up for Tracker'
                buttonTitle='Sign Up'
                errorMessage={errorMessage}
                onSubmit={({email, password}) => signup({email, password})}
            
            />

            <NavLink 
                linkText='Already have an account ? Sign in instead'
                routeName='SignIn'
            />
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
})

export default SignUpScreen