import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {api} from '../utils/constant';

const authService = createApi({
  reducerPath: 'authService',
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({baseUrl: api}),
});
