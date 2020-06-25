import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context  as AuthContext } from '../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler';

const AuthForm = ({headerText, errorMessage, onSubmit, buttonTitle}) => {

   // const { state, signup } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     return (
        <>

            <Spacer>
                <Text h4
                    style={style.textStyle}>
                    {headerText}
                </Text>
            </Spacer>
           
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


            {errorMessage ? 
                <Text style={style.errorMessage}>{errorMessage}</Text> : null }

            <Spacer>
            <Button 
                title={buttonTitle}
                onPress={() => onSubmit({email, password})}              
            /></Spacer>

            <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}>
                <Spacer>
                <Text style={style.linkStyle}>Already have an account ? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>

        </>
    )
}



const style = StyleSheet.create({
    viewStyle: {
        flex:1,
        justifyContent:"center",
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

export default AuthForm