import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tokens, User } from '../../services/user.service';

interface UserState {
  user: User,
  tokens: Tokens
}

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    tokens: {
      accessToken: "",
      refreshToken: ""
    }, 
    user: {
      id: 0,
      createdAt: new Date(),
      name: "",
      email: "",
      isRegistered: false,
      role: "",
    }
  } as UserState,
  reducers: {
    SetState: (state, action: PayloadAction<UserState>) => {
        state.user = action.payload.user
        state.tokens = action.payload.tokens
    },
    SetIsRegistered: (state, action: PayloadAction<boolean>) =>{
        state.user.isRegistered = action.payload;
    }
  },
});



export const { SetState, SetIsRegistered} = UserSlice.actions;



export const UserInfoReducer = UserSlice.reducer;
