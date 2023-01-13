import axios from 'axios'

const fetchAllTrips = async () => {
  const response = await axios.get('http://localhost:4000/api/trip/')

  return response.data.trips || []
}

export default fetchAllTrips
