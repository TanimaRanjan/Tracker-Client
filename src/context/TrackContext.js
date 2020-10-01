import createDataContent from './createDataContext';
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {

    const { payload, type } = action
    switch (type) {
        default:
            return state
    }

}

const fetchTrack = dispatch => () => {}


const createTrack = dispatch => (name, locations) => {

        console.log(name, locations.length);

}


export const { Provider, Context} = createDataContent(
    trackReducer,
    { fetchTrack, createTrack},
    []
)
