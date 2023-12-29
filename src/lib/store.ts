import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import authReducer, {
  setUserEmail,
  setUserId,
  setLoggedIn,
  initialState,
  AuthState
} from './slices/authSlice';


const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(setUserEmail, setUserId, setLoggedIn),
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    localStorage.setItem(
      "auth",
      JSON.stringify((listenerApi.getState() as RootState).auth)
    )
  },
})
const storageAuthState = JSON.parse(localStorage.getItem("auth") || "null");
const preloadedState = {
  auth: storageAuthState == "null" ? initialState : (storageAuthState as AuthState),
}

export const makeStore = () => {
  return configureStore({
    preloadedState,
    reducer: {
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']