import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { setNavigator } from './src/navigationRef'
import LoadingScreen from './src/screens/LoadingScreen'

const switchNavigator = createSwitchNavigator({
    LoadPage:LoadingScreen,
    loginFlow: createStackNavigator({
      SignIn: SignInScreen,
      SignUp: SignUpScreen,
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail : TrackDetailScreen
      }),
      TrackCreate:TrackCreateScreen,
      Account:AccountScreen
    })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
        <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }}/>
        </AuthProvider>
        </LocationProvider>
  )
}