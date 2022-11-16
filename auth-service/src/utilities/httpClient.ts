import axios from 'axios'

const sendGetRequest = async (options: string) => {
  const response = await axios.get(options)
  return response.data
}

export { sendGetRequest }
