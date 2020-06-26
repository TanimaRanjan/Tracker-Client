import { useState, useEffect } from 'react'
import { requestPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location'

export default (callback) => {

        const [error, setError ] = useState(null)

        const startWatching = async () => {
            try {
            const { granted } = await requestPermissionsAsync();

            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval:10000000,
                distanceInterval:100
            },
            callback 
            //(location) => {
              //  addLocation(location)
            //}
            )


            if (!granted) {
                throw new Error('Location permission not granted');
            }
            } catch (error) {
                setError(error);
            }
        };

        useEffect(() => {
            startWatching()
        }, [])

        return [error]
}