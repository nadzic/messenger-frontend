import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import messagesReducer from './messagesSlice';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;