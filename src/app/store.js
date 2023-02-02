import { configureStore } from "@reduxjs/toolkit";
import authRedcucer from "../config/authSlice"

export const store = configureStore({
  reducer: {
    auth: authRedcucer
  }
})