import { useContext, useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { reducer, initialState } from "../modules/member_red";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../service/member";
import { AuthContext } from "../store/AuthContext";

function LoginCon() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { login } = useContext(AuthContext)
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

    const nav = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("login: ", state)
        dispatch({ type: "LOADING" })
        // setTimeout(() => {
        try {
            const res = loginCheck(state.login.id, state.login.pwd)
            // console.log("result: ", res) // 0이면 성공
            if (res === 0) {
                login(state.login.id)
                nav('/list')
            }
        } catch (e) {
            dispatch({ type: "ERROR", error: e.toString() })

        }
        dispatch({ type: "FINISHED" })
        // }, 1000)
    }
    return (<>
        {/* <LoginCom state={state} onChange={onChange} /> */}
        <LoginCom error={state.error} loading={state.loading} onSubmit={onSubmit} state={state.login} onChange={onChange} />
    </>)
}
export default LoginCon;