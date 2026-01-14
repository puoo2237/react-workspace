import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/register"
export const regThunk = createAsyncThunk(
    "regThunk",
    async (user) => {
        // console.log("regThunk: ", user)
        const res = await fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)

        });
        // console.log("thunk 실행")
        // throw new Error("서버 에러 발생")
        return await res.json();
    }
)