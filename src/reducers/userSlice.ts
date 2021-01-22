import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  name: String;
}

type UserAction = {
  payload: {
    name: string;
  }, 
  type: string;
}

const initialState: UserState = {
  name: 'Nik Adzic'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: UserState, action: UserAction) {
      state.name = action.payload.name;
    },
  },
})

export const {
  setUser,
} = userSlice.actions


export default userSlice.reducer;