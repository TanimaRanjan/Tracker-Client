import axios from 'axios'

// Server start 
//ngrok http 3000

export default axios.create({
    baseURL:'http://b21eccadb2ac.ngrok.io'
})
