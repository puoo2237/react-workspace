import { useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { reducer, initialState, initialLogin } from "../modules/member_red";

function LoginCon() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [state, dispatch] = useReducer(reducer, initialLogin)
    const onChange = (e) => {
        // console.log(e.target)
        dispatch({
            type: "CHANGE_INPUT",
            value: e.target.value,
            name: e.target.name,
            form: "login"
        })
        // dispatch({
        //     type: "LOGIN_INPUT",
        //     value: e.target.value,
        //     name: e.target.name
        // })
    }
    return (<>
        {/* <LoginCom state={state} onChange={onChange} /> */}
        <LoginCom state={state.login} onChange={onChange} />
    </>)
}
export default LoginCon;