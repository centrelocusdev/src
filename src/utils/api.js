import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { api_url } from "./config";
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

//forgot password
export const forgotPassword = async () => {
  try {
  } catch (err) {
    toast.error(err);
  }
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