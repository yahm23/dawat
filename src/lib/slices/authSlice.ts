import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    user: {
        email: string | null,
        userId: string | null
    },
    loading: boolean,
    error: string | null,
    loggedIn: boolean
}

const initialState = {
    user: {
        email: null,
        userId: null
    },
    loading: false,
    error: null,
    loggedIn: false
} as AuthState

const authSlice = createSlice({
  name: 'authorise',
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
        state.user.email = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.user.userId = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
        state.error = action.payload;
    },
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
})


export const { setUserEmail, setUserId, setLoading, setError, setLoggedIn } = authSlice.actions
export default authSlice.reducer;