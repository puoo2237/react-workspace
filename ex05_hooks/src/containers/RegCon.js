import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initialReg, initialState, reducer } from "../modules/member_red";
import { register } from "../service/member";
import { useNavigate } from "react-router-dom";

function RegCon() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [state, dispatch] = useReducer(reducer, initialReg)
    const onChange = (e) => {
        console.log("target: ", e.target)
        dispatch({
            type: "CHANGE_INPUT",
            value: e.target.value,
            name: e.target.name,
            form: "register"
        })
        // dispatch({
        //     type: "REG_INPUT",
        //     value: e.target.value,
        //     name: e.target.name
        // })
    }
    const nav = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "LOADING" })
        console.log(state)
        try {
            // setTimeout(()=>{
            register(state.register)
            nav("/list")
            // }, 1000)
            dispatch({ type: "FINISHED" })
        } catch (e) {
            dispatch({ type: "ERROR", msg: e.toString() })
        }
    }
    return (<>
        {/* <RegCom onChange={onChange} state={state} /> */}
        <RegCom loading={state.loading} error={state.error} reg={state.register}
            onSubmit={onSubmit} onChange={onChange}
        />
    </>)
}
export default RegCon;