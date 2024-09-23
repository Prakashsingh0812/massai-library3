import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import bookReducer from './bookReducer';

const store = configureStore({
  reducer: {
    users: userReducer,
    books: bookReducer,
  },
});

export default store;
