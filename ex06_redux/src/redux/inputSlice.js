import { createSlice } from "@reduxjs/toolkit"
import { loginThunk } from "../service/authThunk"
import { createLoadingReducers } from "./commonLoadingHandlers"
const inputSlice = createSlice({

    name: "input",
    initialState: {
        login: { id: "", pwd: "" },
        register: { id: "", pwd: "", name: "", addr: "" },
        result: -1,
        loading: false,
        error: null
    },
    reducers: {
        changeinput: (state, action) => {
            // console.log("changeinput state: ", { ...state })
            // console.log("changeinput state: ", { ...state.login })
            // console.log("changeinput action: ", action)
            const { form, name, value } = action.payload
            state[form][name] = value
        },
        regreset: (state, action) => {
            state.register = { id: "", pwd: "", name: "", addr: "" }
        }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(loginThunk.pending, (state) => { 
            //     state.loading = true;
            //     state.error = null;
            // })
            .addCase(loginThunk.fulfilled, (state, action) => { 
                state.result = action.payload.success;
                state.loading = false;
                state.error = null;
            })
            // .addCase(loginThunk.rejected, (state, action) => { 
            //     state.loading = false;
            //     state.error = action.error.message;
            // })
            createLoadingReducers(builder, loginThunk)
    }
}
)
export const { changeinput, regreset } = inputSlice.actions
export default inputSlice;


