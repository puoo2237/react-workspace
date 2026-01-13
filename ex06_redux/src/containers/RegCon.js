import { useDispatch, useSelector } from "react-redux"
import RegCom from "../components/RegCom"
import { changeinput } from "../redux/inputSlice";

const RegCon = () => {
    const dispatch = useDispatch();
    const reg = useSelector(state => state.input.register)
    // console.log("reg con state: ", state)
    // return state.input.register;
    const onChange = (e) => {
        // dispatch(inputSlice.actions.changeinput)
        const { name, value } = e.target;
        dispatch(changeinput({name, value, form: "register"}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("reg con e.target: ", e.target)
    }
    return (<>
        <RegCom onChange={onChange} onSubmit={onSubmit} reg={reg} />
    </>)
}
export default RegCon