import { PayloadAction, createSlice } from '@reduxjs/toolkit';


type User = {
    fullName: string | null;
    email: string | null;



    id: number | null;
    avatar: number | null;
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
    initialState: {},
    reducers: {
        setUserState: (state, action) => {
            state = action.payload
        },

        setIsLoading: (state, action: PayloadAction<boolean>) => {
            //return {...state, isLoading: action.payload };
            state.isLoading = action.payload;
        },
    },
});

export const { setIsLoading, setUserState } = userDataSlice.actions;

console.log(userDataSlice);