import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./userData";
import { useDispatch } from "react-redux";

export const rootStore = configureStore({
    reducer:{
        [userDataSlice.name] : userDataSlice.reducer
    },
    devTools: true
});


export  type AppDispatch = typeof rootStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch; 