import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from '../features/auth/authSlice';
import { cartReducer } from '../features/Shopcart/shopcartSlice';


export const store= configureStore({
    reducer: {
        auth:authReducer,
        cart:cartReducer
    },
});
