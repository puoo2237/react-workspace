import { configureStore } from "@reduxjs/toolkit"
import inputSlice from "./inputSlice";
import memberDataSlice from "./memberDataSlice";
import authSlice from "./authSlice";
const store = configureStore({
    reducer: {
        input: inputSlice.reducer, // state.input = {login: {id: , pwd: }, register : {id: , pwd: }}
        memberData: memberDataSlice.reducer, // state.memberData : {Data: null}
        auth: authSlice.reducer,
    }
});
export default store;
