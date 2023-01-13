import thunk from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import fishingTripsReducer from './reducers/trips-reducers'

const reducers = combineReducers({
  fishingTrips: fishingTripsReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
