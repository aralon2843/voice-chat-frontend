import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authAPI } from "../services/authService";
import { postAPI } from "../services/postService";
import exploreReducer from "./reducers/exploreSlice";
import userReducer from "./reducers/userSlice";

const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
  userReducer,
  exploreReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authAPI.middleware)
        .concat(postAPI.middleware),
    devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
