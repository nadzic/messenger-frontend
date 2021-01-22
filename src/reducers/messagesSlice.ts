import { createSlice } from '@reduxjs/toolkit'

type Message = {
  text: string;
  incoming: boolean;
  name: string;
  timestamp: number;
}

type SnapshotMessagesAction = {
  type: string;
  payload: Message[];
}  

type AddMessageAction = {
  type: string;
  payload: Message;
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    snapshotMessages: (
      state: any,
      action: SnapshotMessagesAction,
    ) => {
      action.payload.map((message: Message) => state.push(message));
    },
    addMessage(state: any, action: AddMessageAction) {
      state.push(action.payload);
    }
  },
})

export const {
  snapshotMessages,
  addMessage
} = messagesSlice.actions

export default messagesSlice.reducer;