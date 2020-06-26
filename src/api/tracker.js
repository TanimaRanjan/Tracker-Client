import axios from 'axios'

// Server start 
//ngrok http 3000

export default axios.create({
    baseURL:'http://1f362f8c73b3.ngrok.io'
})


//<NavigationEvents onWillFocus={clearErrorMessage}