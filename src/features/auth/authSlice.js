import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        },
        existinguser: (state, action) => {
            state.user = action.payload;
        },
    },
});
export const authReducer = authSlice.reducer;
export const {
    login,
    logout,
    existinguser,
} = authSlice.actions;