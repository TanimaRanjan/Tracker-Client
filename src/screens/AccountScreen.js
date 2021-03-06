import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import {Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AccountScreen = () => {

    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{top:'always'}} >
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
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
        justifyContent:"center",
        // marginTop:-180
    },
    textStyle: {
        textAlign:"center",
        marginTop:30
    },
    errorMessage: {
        textAlign:"center",
        color:'red',
        fontSize:18
    }
})

export default AccountScreen
