import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMail: null,
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectMail;

export default mailSlice.reducer;
