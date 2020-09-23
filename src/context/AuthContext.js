import { AsyncStorage } from 'react-native' 
import createDataContext from './createDataContext'
import trackerAPI from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = ( state, action) => {

    switch(action.type) {
        case 'SIGN_IN':
            return {
                token:action.payload,
                errorMessage:'' 
            }
        case 'SIGN_OUT':
                return {
                    ...state,
                    token:null
                }            
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload}; 
        case 'CLEAR_ERROR':
            return {...state, errorMessage:''};
        default:
            return state
    }

}

const clearErrorMessage = dispatch => () => dispatch({type: 'CLEAR_ERROR'})

const signup =  (dispatch) =>  async ({email, password}) => {
        // Make api request 
        try {
            const response = await trackerAPI.post('/signup', {email,password})

            // Store the token in storage
            await AsyncStorage.setItem('token', response.data.token)    

            // Dispatch action to update the token key
            dispatch({type:'SIGN_IN', payload:response.data.token})

            // Navigate to main flow
            navigate('TrackList')

        } catch (error) {
            //error.response.data
            console.log(error)
            dispatch({type: 'ADD_ERROR', payload:'Something went wrong with Sign Up'})
        }
    }

const signin = (dispatch) =>  async ({email, password}) => {
    try {
  
        const response = await trackerAPI.post('/signin', {email,password})

        await AsyncStorage.setItem('token', response.data.token)    

        dispatch({type:'SIGN_IN', payload:response.data.token})

        navigate('TrackList')

        } catch (error) {
            dispatch({type: 'ADD_ERROR', payload:'Something went wrong with Sign In'})
        }
    }

    const autoSignIn = dispatch => async() => {
        const token = await AsyncStorage.getItem('token')
        if(token) {
            dispatch({type:'SIGN_IN', payload:token})
            navigate('TrackList')
        } else {
            navigate('SignUp')
        }
        
    }

const signout = dispatch =>  async () => {

        // Make API request
        // Delete JWT token ?t
        try {
            await AsyncStorage.removeItem('token')
            dispatch({type:'SIGN_OUT'})
            navigate('SignIn')
        } catch (error) {
            dispatch({type: 'ADD_ERROR', payload:'Something went wrong with sign out'})
        }
    }

export const { Provider, Context } = createDataContext(
        authReducer, 
        {   signup, 
            signin,
            signout, 
            clearErrorMessage, 
            autoSignIn},
        {   
            token:null, errorMessage:''
        }
    )
    