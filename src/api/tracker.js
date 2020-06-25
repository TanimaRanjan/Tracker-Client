import axios from 'axios'

// Server start 
//ngrok http 3000

export default axios.create({
    baseURL:'http://c9d6744da2ad.ngrok.io'
})


//<NavigationEvents onWillFocus={clearErrorMessage}