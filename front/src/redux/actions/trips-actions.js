import fetchAllTrips from '../../api/trips'

const setTripsData = (tripsData) => ({
  type: 'FISHING_TRIPS_FETCHED',
  tripsData
})

const setIsFetching = (isFetching) => ({
  type: 'FISHING_TRIPS_FETCHING',
  isFetching
})

const setHasFetchError = (hasFetchError) => ({
  type: 'FISHING_TRIPS_FETCH_ERROR',
  hasFetchError
})

const fetchSuccessful = (tripsData) => (dispatch) => {
  dispatch(setTripsData(tripsData))
  dispatch(setIsFetching(false))
  dispatch(setHasFetchError(false))
}

const isFetching = () => (dispatch) => {
  dispatch(setIsFetching(true))
  dispatch(setHasFetchError(false))
}

const fetchFailed = () => (dispatch) => {
  dispatch(setIsFetching(false))
  dispatch(setHasFetchError(true))
}

export const fetchFishingTrips = () => async (dispatch) => {
  dispatch(isFetching())

  try {
    const response = await fetchAllTrips()

    dispatch(fetchSuccessful(response))
  } catch (err) {
    dispatch(fetchFailed())
  }
}

export default fetchFishingTrips
