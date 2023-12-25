import {
    createAction,
    createReducer,
    UnknownAction,
    PayloadAction,
} from '@reduxjs/toolkit'
  
const login = createAction<boolean>('login')
  
function isActionWithBoolPayload(
    action: UnknownAction
  ): action is PayloadAction<boolean> {
    return typeof action.payload === 'boolean'
}
  
const LoggedInReducer = createReducer(
  {
    loggedInStatus: false,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(login, (state, action) => {
        console.info("login ");
        state.loggedInStatus = action.payload;
      })

      // You can apply a "matcher function" to incoming actions
      .addMatcher(isActionWithBoolPayload, (state, action) => {
        console.info("unkown action potentially");
      })
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  }
);

export default LoggedInReducer;