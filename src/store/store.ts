import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { serviceApi } from "../services/app.service";
import { UserInfoReducer as user} from "./slices/user";

export const store = configureStore({
	reducer: combineReducers({
	  [serviceApi.reducerPath]: serviceApi.reducer,
	  user

	}),
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		serializableCheck: false,
	  })
		.concat([])
		.concat(serviceApi.middleware),
  });