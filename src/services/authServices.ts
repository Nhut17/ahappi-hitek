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
  }),
});

export const {useLoginAuthMutation} = authService;
