import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./userData";
import { useDispatch } from "react-redux";
import { STORAGE_KEYS, getStorageItem } from "utils/storage";

export const defineUserDataFromStorage = () => {
    const userData = getStorageItem(STORAGE_KEYS.USER_DATA);
    const initState = userDataSlice.getInitialState();
    console.log(initState);

    if(userData) {
        console.log(userData);
        return { ...initState, user: userData };
    }
    return initState;
};


export const rootStore = configureStore({
    reducer:{
        [userDataSlice.name] : userDataSlice.reducer,
    },
    
    preloadedState: {
        userData: defineUserDataFromStorage(),
    },
    devTools: true,
});


export  type AppDispatch = typeof rootStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch; 