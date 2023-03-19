import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
})

export const login = (creds) => API.post('/auth/login', creds)
export const register = (creds) => API.post('/auth/register', creds)

// User

export const getUser = () => API.get(`/user/`)

export const getAll = () => API.get(`/user/all`)
export const addUserLocation = (location) => API.post(`/user?location=${location}`)
export const addUserAvailability = (available) => API.post(`/user?available=${available}`)
