import ReduxCom from "./ReduxCom"
import { configureStore, createSlice } from "@reduxjs/toolkit" // state 정의 및 switch의 case up 설정
import { useDispatch, useSelector } from "react-redux"
const counterSlice = createSlice({
    name: "counter", // 고유 식별 값
    initialState: { value: 100 }, // state 초기값값
    reducers: { // 기능 정의 영역
        up: (state, action) => {
            console.log("up state:", {...state})
            console.log("up action:", action)
            state.value += action.data
        },
        down: (state, action) => {
            console.log("down state:", {...state})
            console.log("down action:", action)
            state.value += action.payload
        }
    }
});
export const store = configureStore({
    // state 저장소
    reducer: {
        cnt: counterSlice.reducer
    }
})
const ReduxCon = () => {
    const dispatch = useDispatch()
    const upClick = () => {
        dispatch({ type: "counter/up", data: 2 })
    }
    const downClick = () => {
        dispatch(counterSlice.actions.down(-2))

    }
    const value = useSelector(state => {
        console.log("state: ", state)
        return state.cnt.value;
    })
    return (<>
        <ReduxCom upClick={upClick} downClick={downClick} value={value} />
    </>)
}
export default ReduxCon