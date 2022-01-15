import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/post',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['post'],
  endpoints: (build) => ({
    getPostsByUserId: build.query<IPost[] | undefined, string>({
      query: (id: string) => ({
        url: `/byUser/${id}`,
      }),
      providesTags: (result) => ['post'],
    }),

    post: build.mutation<IPost, Pick<IPost, 'authorId' | 'body'>>({
      query: ({ authorId, body }: Pick<IPost, 'authorId' | 'body'>) => ({
        url: '/',
        method: 'POST',
        body: { authorId, body },
      }),
      invalidatesTags: ['post'],
    }),
    delete: build.mutation<IPost, string>({
      query: (postId: string) => ({
        url: `/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['post'],
    }),
  }),
});
