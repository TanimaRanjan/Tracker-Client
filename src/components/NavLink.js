import React from 'react'
import { Text, TouchableOpacity, StyleSheet} from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({navigation, linkText, routeName}) => {

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate(routeName)}>
            <Spacer>
            <Text style={style.linkStyle}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    linkStyle : {
        textAlign:"center",
        color:'blue',
        fontSize:18
    }
})


export default withNavigation(NavLink)