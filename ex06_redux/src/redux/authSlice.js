import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, id: null }
const savedAuth = sessionStorage.getItem("auth");
const authSlice = createSlice({
    name: "auth",
    initialState: savedAuth ? JSON.parse(savedAuth) : initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.id = action.payload;
            sessionStorage.setItem("auth", JSON.stringify({...state}))
        },
        logout: (state) => {
            sessionStorage.clear();
            // state.isLoggedIn = false;
            // state.id = null;
            return initialState // return을 사용해서 전달하거나 위처럼 직접 변경해야 함 
        }
    }
})
export const { login, logout } = authSlice.actions
export default authSlice;
