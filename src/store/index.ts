import { configureStore } from "@reduxjs/toolkit";
import { defineUserDataFromStorage, userDataSlice } from "./userData";
import { useDispatch } from "react-redux";

export const rootStore = configureStore({
    reducer:{
        [userDataSlice.name] : userDataSlice.reducer,
    }, 
    devTools: true,
  preloadedState: {
    userData: defineUserDataFromStorage(),
  },
});


export  type AppDispatch = typeof rootStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch; 