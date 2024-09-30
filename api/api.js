import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://condelivery-api.onrender.com/',
  // baseURL: "https://saveocean-api.onrender.com"
})
