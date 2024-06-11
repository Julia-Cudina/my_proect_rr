import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { postAuthData } from './effects';
import { STORAGE_KEYS, getStorageItem } from 'utils/storage';


type User = {
    fullName: string | null;
    email: string | null;
    id: number | null;
    avatar: string | null;
    token: string | null;
};

type UserDataState ={
    userData: User;
    isLoading: boolean;
    error: string | null
};

const initialState: UserDataState = {
   userData: { 
    fullName: null,
    email: null,
    id: null,
    avatar: null,
    token: null,  
   },
   isLoading: false,
   error: null 

};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
        },
            
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            //return {...state, isLoading: action.payload };
            state.isLoading = action.payload;
        },
    },    

        selectors: {
            getToken: (state) => state.userData.token,
            getIsLoading: (state) => state.isLoading,
            getUserAvatar: state => state.userData.avatar,
        },
    extraReducers: builder => {
        builder.addCase(postAuthData.pending, state => {
            state.isLoading = true;
        })
        .addCase(postAuthData.fulfilled, (state, action) => {
            state.isLoading = false
            state.userData = action.payload;
        })
        .addCase(postAuthData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message || 'Что-то пошло не так'
        });
    },    
});



export const { setIsLoading, setUserData } = userDataSlice.actions;

export const { getIsLoading, getToken, getUserAvatar } = userDataSlice.selectors;



