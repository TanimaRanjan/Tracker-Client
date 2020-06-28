import { useState, useEffect } from 'react'
import { requestPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location'

export default (shouldTrack, callback) => {

        const [error, setError ] = useState(null)

        // const [subscriber, setSubscriber ] = useState(null)

        

        useEffect(() => {

            const startWatching = async () => {
                let subscrber
                try {
                const { granted } = await requestPermissionsAsync();
    
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval:10000000,
                    distanceInterval:100
                },
                    callback 
                )
    
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
                } catch (error) {
                    setError(error);
                }
            };


            if(shouldTrack) {
                startWatching()    
            } else {
                if(subscriber) {
                    const ret = subscriber.remove()
                    subscriber = null
                }
            }

            return () => {
                if(subscriber) {
                    subscriber.remove()
                }
            }
        }, [shouldTrack, callback])

        return [error]
}