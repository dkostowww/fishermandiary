import initialState from '../../utils/reduxInitialState'

export const fishingTripsReducer = (
    state = initialState.fishingTrips,
    action
) => {
    switch(action.type) {
        case 'FISHING_TRIPS_FETCH':
            return { trips: action.payload.fishingTrips, loading: false }
        default:
            return { ...state }
    }
}