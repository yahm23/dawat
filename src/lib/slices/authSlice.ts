import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  user: {
    email: string | null,
    userId: string | null
  },
  error: string | null,
  loggedIn: boolean
}

export const initialState = {
  user: {
    email: null,
    userId: null
  },
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
    setError(state, action: PayloadAction<string>) {
        state.error = action.payload;
    },
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
})


export const { setUserEmail, setUserId, setError, setLoggedIn } = authSlice.actions
export default authSlice.reducer;