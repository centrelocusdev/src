import axios from "axios";

const API_URL = 'http://52.66.196.48:8000/api'

//register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/registration/buyer/`, userData)

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//register admin
const registerAdmin = async (userData) => {
  const response = await axios.post(`${API_URL}/registration/admin/`, userData)

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

//login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login/`, userData)

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//logout
const logout = async () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  registerAdmin,
  login,
}

export default authService