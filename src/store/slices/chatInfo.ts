import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const ChatInfoSlice = createSlice({
  name: 'user',
  initialState: {
    currentChatId: ""
  },
  reducers: {
    SetCurrentChatId: (state, action: PayloadAction<{id: string}>) => {
        state.currentChatId = action.payload.id;
    },
    
  },
});



export const { SetCurrentChatId} = ChatInfoSlice.actions;



export const ChatInfoReducer = ChatInfoSlice.reducer;
