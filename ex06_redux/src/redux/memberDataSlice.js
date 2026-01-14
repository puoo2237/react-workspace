import { createSlice } from "@reduxjs/toolkit";
import { memberThunk } from "../service/memberThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const memberDataSlice = createSlice({
    name: "memberData",
    initialState: { data: null, loading: false, error: null},
    reducers: {
        // list: (state, action) => {
        //     // console.log("list state: ", { ...state })
        //     // console.log("list action: ", action)
        //     state.data = action.payload
        // },
    },
    extraReducers: (builder) => {
        // 로딩중, 완료, 에러 작업 처리
        builder
            // .addCase(memberThunk.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            //     // console.log("...로딩중")
            // })
            .addCase(memberThunk.fulfilled, (state, action) => {
                // console.log("데이터 받음")
                // console.log("state: ", {...state})
                // console.log("action: ", action)
                state.loading = false;
                state.error = null;
                state.data = action.payload
            })
            // .addCase(memberThunk.rejected, (state,  action) => {
            //     // console.log("에러 발생", action)
            //     state.loading = false;
            //     state.error = action.error.message;
            // })
            createLoadingReducers(builder, memberThunk)
    }
})
export const { list } = memberDataSlice.actions
export default memberDataSlice