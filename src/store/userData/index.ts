import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


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

};

export const userDataSlice = createSlice({
    name: 'userSlice',
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
});

export const { setIsLoading, setUserData } = userDataSlice.actions;

export const { getIsLoading, getToken, getUserAvatar } = userDataSlice.selectors;

console.log(userDataSlice);