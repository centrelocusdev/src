import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authSevice";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  updatePassword: null,
};

// register user
export const register = createAsyncThunk ('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (err) {
    const message = (err?.response?.data?.message) || err.message || err.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// register admin
export const registerAdmin = createAsyncThunk ('auth/register-admin', async (user, thunkAPI) => {
  try {
    return await authService.registerAdmin(user)
  } catch (err) {
    const message = (err?.response?.data?.message) || err.message || err.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//login user
export const login = createAsyncThunk ('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (err) {
    const message = (err?.response?.data?.message) || err.message || err.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//logout
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

//change password
export const changePassword = createAsyncThunk('user/changePassword', async (params, thunkAPI) => {
  try {
    return await authService.changePassword(params.headers, params.passwords)
  }  catch (err) {
    const message = (err?.response?.data?.message) || err.message || err.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true 
        state.message = action.payload
        state.user = null
      })
      .addCase(registerAdmin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true 
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true 
        state.message = action.payload
        state.user = null
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.updatePassword = action.payload
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true 
        state.message = action.payload
        state.updatePassword = null
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
