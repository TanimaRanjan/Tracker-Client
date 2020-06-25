import React, {useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import {Context as AuthContext } from '../context/AuthContext'

import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AccountScreen = () => {

    const { signout } = useContext(AuthContext)

    return (
        <View style={style.viewStyle}>
        <Spacer>
        <Text h4
            style={style.textStyle}>
            Account 
        </Text>
        </Spacer>
        <Spacer>
            <Button 
                title='Sign Out'
                onPress={signout}        
            /></Spacer>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
        justifyContent:"center",
        // marginTop:-180
    },
    textStyle: {
        textAlign:"center"
    },
    errorMessage: {
        textAlign:"center",
        color:'red',
        fontSize:18
    }
})

export default AccountScreen