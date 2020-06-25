import { AsyncStorage } from 'react-native' 
import createDataContext from './createDataContext'
import trackerAPI from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = ( state, action) => {

    switch(action.type) {
        case 'ADD_TOKEN':
            return {
                token:action.payload,
                errorMessage:'' 
            }
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload}; 
        default:
            return state
    }

}

const signup =  (dispatch) => {
    return async ({email, password}) => {
        // Make api request 
        try {
            const response = await trackerAPI.post('/signup', {email,password})
            console.log(response.data.token)

            // Store the token in storage
            await AsyncStorage.setItem('token', response.data.token)    

            // Dispatch action to update the token key
            dispatch({type:'ADD_TOKEN', payload:response.data.token})

            // Navigate to main flow
            navigate('TrackList')

        } catch (error) {
            //error.response.data
            dispatch({type: 'ADD_ERROR', payload:'Something went wrong with signup'})
        }
        
        // If signed up,then change status to authenticated

        // If signing up failed - show error

    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        // Make API request 

        // If signed un update thestatus to autheticated

        // If sign in failed = show error
    }
}

const signout = (dispatch) => {
    return ({email}) => {

        // Make API request
        // Delete JWT token ?

    }
}


export const {Provider, Context } = createDataContext(
        authReducer, 
        {
            signup, signin,signout},
        {   
            token:null, errorMessage:''
        }
    )
    