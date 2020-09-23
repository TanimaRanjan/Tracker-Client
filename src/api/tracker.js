import axios from 'axios'

// Server start 
//ngrok http 3000

export default axios.create({
    baseURL:'http://3ab7c898ac03.ngrok.io'
})
