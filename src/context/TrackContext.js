import createDataContent from './createDataContext';

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
