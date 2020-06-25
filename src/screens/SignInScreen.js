import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context  as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = ({navigation}) => {

    const { state, signin } = useContext(AuthContext)

    return (

        <View style={style.viewStyle}>
            <AuthForm 
                headerText='Sign In to Tracker'
                buttonTitle='Sign In'
                errorMessage={state.errorMessage}
                onSubmit={({email, password}) => signin({email, password})}
            
            />

            <NavLink 
                linkText="Don't have an account ? Sign up"
                routeName='SignUp'
            />
        </View>

    )
}

SignInScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
       justifyContent:"center",
       marginTop:-180
    },
    textStyle: {
        textAlign:"center"
    }
})

export default SignInScreen