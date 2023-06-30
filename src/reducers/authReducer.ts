import {UserType} from '../model/userModel';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {authService} from '../services/authServices';
import {ProductType} from '../model/productModel';

export interface UserState {
  user: UserType | undefined;
  listProduct: ProductType[];
  itemCart: number | 0;
}

const initialState: UserState = {
  user: undefined,
  listProduct: [],
  itemCart: 0,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    clearData: () => initialState,
    cacheListProduct: (state, action: PayloadAction<ProductType[]>) => {
      state.listProduct = action.payload;
    },
    addItemCart: state => {
      if (state.itemCart > 99) {
        state.itemCart = state.itemCart;
      } else {
        state.itemCart = state.itemCart + 1;
      }
    },
    clearItemCart: state => {
      state.itemCart = 0;
      console.log('item' + state.itemCart);
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

export const {addItemCart, cacheListProduct, clearData, clearItemCart} =
  authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
