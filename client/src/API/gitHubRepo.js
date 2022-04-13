import axios from 'axios'
const BASE_URL = 'https://api.github.com/repos/'

const instance = axios.create({
  baseURL: BASE_URL
})

export default instance