import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IUser } from '../models/IUser';

interface GetUserResponse extends IUser {}
interface GetUserRequest {
  id: string;
}
export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/user',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUser: build.query<GetUserResponse, string>({
      query: (id: string) => ({
        url: `/${id}`,
      }),
    }),
  }),
});
