// chat-gpt code
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import appReducer from './features/appSlice'; // Make sure to import appSlice, not userSlice

 const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});

export default store;


