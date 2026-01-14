import { useDispatch, useSelector } from "react-redux"
import LoginCom from "../components/LoginCom"
import inputSlice, { changeinput } from "../redux/inputSlice"
import { loginThunk } from "../service/authThunk"
import { useNavigate } from "react-router-dom"
import { login } from "../redux/authSlice"

const LoginCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { id, pwd } = useSelector(state => {
        console.log("logincon state: ", state)
        return state.input.login;
    })

    const { result, loading, error } = useSelector(state => state.input)
    const onChange = (e) => {
        // console.log(e.target)
        const { name, value } = e.target
        dispatch(changeinput({ name, value, form: "login" }))
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target)
        // console.log("resultThunk:", resultThunk.payload.success)
        const resultThunk = await dispatch(loginThunk({ id, pwd }))
        if (resultThunk.payload.success === 0) {
            dispatch(login(id))
            nav("/")
        }
    }
    return (<>
        <LoginCom result={result} loading={loading} error={error}
            onSubmit={onSubmit} onChange={onChange} id={id} pwd={pwd} />
    </>)
}
export default LoginCon