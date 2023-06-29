import {ProductParamsType, ProductType} from './../model/productModel';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {api} from '../utils/constant';
import {LoginAuthType, UserType} from '../model/userModel';

export const authService = createApi({
  reducerPath: 'authService',
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({baseUrl: api}),
  endpoints: builder => ({
    loginAuth: builder.mutation<UserType, Partial<{data: LoginAuthType}>>({
      query: ({data}) => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: data,
        };
      },
      transformResponse: (response: {
        results: {object: {result: UserType}};
      }) => {
        return response.results.object.result;
      },
    }),
    getListProduct: builder.query<
      ProductType[],
      Partial<{data: ProductParamsType}>
    >({
      query: ({data}) => {
        const pagination: number = data?.pagination as number;
        const limit: number = data?.limit as number;

        const URL = `https://hitek-02.hitek.com.vn:7071/api/v1/product?fields=["$all"]&pagination=${pagination}&limit=${limit}`;
        return {
          url: URL,
          method: 'GET',
        };
      },
      transformResponse: (response: {
        results: {objects: {rows: ProductType[]}};
      }) => {
        return response.results.objects.rows;
      },
    }),
  }),
});

export const {
  useLoginAuthMutation,
  useLazyGetListProductQuery,
  useGetListProductQuery,
} = authService;
