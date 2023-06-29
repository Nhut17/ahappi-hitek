import {combineReducers} from 'redux';
import {authService} from '../services/authServices';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authReducer,
  [authService.reducerPath]: authService.reducer,
});

export default rootReducer;
