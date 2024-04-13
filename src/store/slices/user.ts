import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tokens, UserProps } from "../../services/user.service";

interface UserState {
  user: UserProps;
  tokens: Tokens;
}

const UserSlice = createSlice({
  name: "user",
  initialState: {
    tokens: {
      accessToken: "",
      refreshToken: "",
    },
    user: {
      id: 0,
      createdAt: new Date(),
      name: "",
      email: "",
      isRegistered: false,
      role: "",
    },
  } as UserState,
  reducers: {
    SetUserInfo: (state, action: PayloadAction<UserProps>) => {
      state.user = action.payload;
    },

    SetTokens: (state, action: PayloadAction<Tokens>) => {
      state.tokens = action.payload;
    },
    SetIsRegistered: (state, action: PayloadAction<boolean>) => {
      state.user.isRegistered = action.payload;
    },
  },
});

export const { SetUserInfo, SetTokens, SetIsRegistered } = UserSlice.actions;

export const UserInfoReducer = UserSlice.reducer;
