import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../../transport';
import { AuthFormData, AuthResponse } from "./types";
import { STORAGE_KEY, setStorageitem } from "utils/storage";


export const postAuthData = createAsyncThunk('userData/postAuth', async (payload: AuthFormData) => {
    const {
        data: { data,token},
     } = await post<AuthResponse>('/auth', payload);
    
      const userData = { ...data, token };

      setStorageItem(STORAGE_KEY.USER_DATA, userData);

      return userData;
});