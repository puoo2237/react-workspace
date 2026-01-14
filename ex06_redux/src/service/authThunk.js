import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/login"
export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        // console.log("login thunk user: ", user)
        const res = await fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" }, // 데이터 처리 방식 지정
            body: JSON.stringify(user) // header에 지정된 방식으로 데이터를 포장해서 보냄
        })
        // throw new Error("서버 에러 발생")
        return await res.json();
    }
)
