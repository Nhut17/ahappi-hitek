import {configureStore} from '@reduxjs/toolkit';
import {authService} from '../services/authServices';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authService.middleware),
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
