import { useReducer } from "react";
import ReducerCom from "../components/ReducerCom";

const reducer = (state, action) => {
    console.log("setNum state: ", state) // 현재까지의 state 값
    console.log("setNum action: ", action) // dispatch의 값
    console.log("setNum action: ", action.type)
    switch (action.type) {
        case "up": return { ...state, value: state.value + 10 };
        case "down": return { ...state, value: state.value - 5 };
        default: return state;
    }
    // return state + 1;
}
const initialState = { value: 0, name: "홍길동" }
function ReducerCon() {
    const [state, dispatch] = useReducer(reducer, initialState); //(함수, 초기값)값이 들어갈 수 있고, 해당 함수를 통해 state값 변경
    const onClick = () => { dispatch({ type: "up" }) } // key-value형태 
    const onDown = () => { dispatch({ type: "down" }) }
    return (<>
        <ReducerCom state={state} onClick={onClick} onDown={onDown} />
    </>)
}
export default ReducerCon;
