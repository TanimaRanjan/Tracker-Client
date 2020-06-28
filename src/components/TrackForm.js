import React, {useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import {Context as LocationContext } from '../context/LocationContext'
import Spacer from './Spacer'

const TrackForm = () => {

    const {state:{name, recording, locations }, 
                startRecording, 
                stopRecording, 
                changeName}  = useContext(LocationContext)

    return (
        <>
        <Spacer>
        <Input 
            placeholder="Enter name"
            value={name}
            onChangeText={changeName}
        />
        {recording ? 
            <Button 
            title="Stop Recording"
            onPress={stopRecording}
        />
            :
            <Button 
            title="Start Recording"
            onPress={startRecording}
        />
        }
        
        </Spacer>

        </>
    )
}


export default TrackForm