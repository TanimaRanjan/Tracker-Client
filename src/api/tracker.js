import axios from 'axios'
import { AsyncStorage} from "react-native";

// Server start 
//ngrok http 3000

const instance =  axios.create({
    baseURL:' http://27fd39f3fdc8.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem(('token'))
            if(token) {
                config.headers.Authorization = `Bearer ${token}`
            }
        } catch (error) {
            console.log('ERROR !!!!!! ', error)
        }

    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
