import initialState from '../initial-state'

const fishingTripsReducer = (
  state = initialState.fishingTrips,
  action
) => {
  switch (action.type) {
    case 'FISHING_TRIPS_FETCHED':
      return {
        ...state,
        trips: action.tripsData,
      }
    case 'FISHING_TRIPS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'FISHING_TRIPS_FETCH_ERROR':
      return {
        ...state,
        hasFetchError: action.hasFetchError
      }
    default:
      return { ...state }
  }
}

export default fishingTripsReducer
