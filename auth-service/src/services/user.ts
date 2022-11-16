import { sendGetRequest } from '../utilities/httpClient'

export const getUserByUsername = async (username: string) => {
  const getUserUrl = process.env.USER_SERVICE_URL + username

  try {
    const res = await sendGetRequest(getUserUrl)
    return res.user
  } catch (err) {
    console.error(`getUserByUsername: ${err.message}`)
  }
}
