import { useState, useEffect } from 'react'
import { requestPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location'

export default (shouldTrack, callback) => {

        const [error, setError ] = useState(null)

        const [subscriber, setSubscriber ] = useState(null)

        const startWatching = async () => {
            try {
            const { granted } = await requestPermissionsAsync();

            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval:10000000,
                distanceInterval:100
            },
                callback 
                //(location) => {
                  //  addLocation(location)
                //}
            )

            setSubscriber(sub)

            if (!granted) {
                throw new Error('Location permission not granted');
            }
            } catch (error) {
                setError(error);
            }
        };

        useEffect(() => {
            if(shouldTrack) {
                startWatching()    
            } else {
                const ret = subscriber.remove()
                setSubscriber(null)
            }
        }, [shouldTrack, callback])

        return [error]
}