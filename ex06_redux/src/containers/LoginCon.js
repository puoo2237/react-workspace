import { useDispatch, useSelector } from "react-redux"
import LoginCom from "../components/LoginCom"
import inputSlice from "../redux/inputSlice"

const LoginCon = () => {
    const dispatch = useDispatch()

    const { id, pwd } = useSelector(state => {
        console.log("logincon state: ", state)
        return state.input.login
    })
    const onChange = (e) => {
        // console.log(e.target)
        const { name, value } = e.target
        dispatch(inputSlice.actions.changeinput({ name, value, form: "login" }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }
    return (<>
        <LoginCom onSubmit={onSubmit} onChange={onChange} id={id} pwd={pwd} />
    </>)
}
export default LoginCon