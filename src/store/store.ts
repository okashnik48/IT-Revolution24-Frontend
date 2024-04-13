import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { serviceApi } from "../services/app.service";
import { ChatInfoReducer as chatInfo} from "./slices/chatInfo";

export const store = configureStore({
	reducer: combineReducers({
	  [serviceApi.reducerPath]: serviceApi.reducer,
	  chatInfo

	}),
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		serializableCheck: false,
	  })
		.concat([])
		.concat(serviceApi.middleware),
  });