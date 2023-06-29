import {UserType} from '../model/userModel';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {authService} from '../services/authServices';
import {ProductType} from '../model/productModel';

export interface UserState {
  user: UserType | undefined;
  listProduct: ProductType[];
}

const initialState: UserState = {
  user: undefined,
  listProduct: [],
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    cacheListProduct: (state, action: PayloadAction<ProductType[]>) => {
      state.listProduct = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authService.endpoints.loginAuth.matchFulfilled,
      (state, {payload}) => {
        state.user = payload;
      },
    );
    builder.addMatcher(
      authService.endpoints.getListProduct.matchFulfilled,
      (state, {meta, payload}) => {
        const page: number = meta.arg.originalArgs.data?.pagination as number;

        if (page === 1) {
          state.listProduct = payload;
        } else {
          state.listProduct = state.listProduct.concat(payload);
        }
      },
    );
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
