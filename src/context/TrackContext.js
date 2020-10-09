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


const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/track', {name, locations})


}


export const { Provider, Context} = createDataContent(
    trackReducer,
    { fetchTrack, createTrack},
    []
)
