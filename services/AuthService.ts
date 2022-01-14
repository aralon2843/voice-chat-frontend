import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

interface LoginResponse {
  access_token: string;
  id: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterResponse {
  email: string;
  username: string;
}

interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/auth' }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password }: LoginRequest) => ({
        url: '/login',
        method: 'POST',
        body: { username, password },
      }),
    }),
    register: build.mutation<RegisterResponse, RegisterRequest>({
      query: ({ email, username, password }: RegisterRequest) => ({
        url: '/register',
        method: 'POST',
        body: { email, username, password },
      }),
    }),
  }),
});
