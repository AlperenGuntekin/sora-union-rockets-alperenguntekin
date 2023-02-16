import { createSlice } from "@reduxjs/toolkit";
import { ItemsProps, ReviewProps, RocketProps } from "@/utils/interface";
import {
  saveLayoutDataLocalStorage,
  saveUserDataLocalStorage,
} from "@/utils/getLocalStorage";

const initialState: ReviewProps = {
  allUsers: [],
  isLoading: true,
  getUsers: [],
};

export const reviewSlice = createSlice({
  name: "review",

  initialState,
  reducers: {
    storeUser: (state, action) => {
      saveLayoutDataLocalStorage(action.payload as RocketProps[]);
      state.allUsers = action.payload;
    },

    defaultUser: (state, action) => {
      saveUserDataLocalStorage(action.payload as ItemsProps);
      state.getUsers = action.payload;
    },

    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { storeUser, setLoader, defaultUser } = reviewSlice.actions;

export default reviewSlice.reducer;
