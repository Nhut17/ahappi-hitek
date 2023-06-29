import {configureStore} from '@reduxjs/toolkit';
import {authService} from '../services/authServices';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import rootReducer from '../reducers/rootReducer';
import persistStore from 'redux-persist/es/persistStore';
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [authService.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: any[] = [thunkMiddleware, authService.middleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export let persistor = persistStore(store);
