import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { api_url } from "./config";

//send otp
export const sendOtp = async (email) => {
  const response = await axios.post(`${api_url}/get_otp/`, { email })
  return response.data
}

//user register
export const register = async (userData) => {
  const response = await axios.post(
    `${api_url}/registration/buyer/`,
    userData
  );

  if (response.data) {
    Cookies.set("src-token", response.data.token);
    toast.success('User registered successfully')
    return response.data
  } else if(response.data.Error) {
    toast.error(response.data.Error)
  }
};

//user login
export const login = async (userData) => {
  const response = await axios.post(
    `${api_url}/login/`,
    userData
  );

  if(response.data.Response) {
    toast.error(response.data.Response)
  }
  else if (response.data) {
    Cookies.set("src-token", response.data.token);
    toast.success('User logged in')
    return response.data
  }
};

//user logout
export const logout = async () => {
  Cookies.remove('src-token')
  await axios.get(`${api_url}/logout/`)
  toast.success('User logged out')
  return true
};

//change user password
export const changePassword = async (passwords) => {
  const response = await axios.put(`${api_url}/change-password/`, passwords, {
    headers: {
      Authorization: `Token ${Cookies.get('src-token')}`
    }
  })
  toast.success('Password changed successfully')

  return response.data
};

//send token for forgot password
export const sendToken = async (email) => {
  const response = await axios.post(`${api_url}/password_reset/`, { email });

  return response.data
}

//forgot password
export const forgotPassword = async (password, token) => {
  const response = await axios.post(`${api_url}/password_reset/confirm/`, { password, token });

  return response.data
};

//admin login 
export const adminLogin = async (email, password) => {
  try {

  } catch (err) {
    toast.error(err)
  }
}

//get user by token
export const getCurrentUser = async () => {
  const response = await axios.get(`${api_url}/current_user/`, {
    headers: {
      Authorization: `Token ${Cookies.get('src-token')}`
    }
  })

  if(response.data) {
    return response.data
  } else {
    toast.error("couldn't get user")
  }
}

//get user profile details
export const getUserDetails = async () => {
  const response = await axios.get(`${api_url}/buyer_update/`, {
    headers: {
      Authorization: `Token ${Cookies.get('src-token')}`
    }
  })

  return response.data
}

//update user profile
export const updateUserDetails = async (profileDetails) => {
  const response = await axios.put(`${api_url}/buyer_update/`, profileDetails, {
    headers: {
      Authorization: `Token ${Cookies.get('src-token')}`
    }
  })

  return response.data

  return response.data
}