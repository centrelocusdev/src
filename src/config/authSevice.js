import axios from "axios";
import API_URL from "./API_URL";

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

//user change password
const changePassword = async (headers, passwords) => {
  const response = await axios.put(`${API_URL}/change-password/`, passwords, headers)

  return response.data
}

const authService = {
  register,
  registerAdmin,
  login,
  changePassword
}

export default authService