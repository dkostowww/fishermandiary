import { fetchAllTrips } from '../../api/trips'

export const fetchFishingTrips = () => async (dispatch) => {
    const response = await fetchAllTrips()

    dispatch({
        type: 'FISHING_TRIPS_FETCH',
        payload: {
            fishingTrips: response
        }
    })
}