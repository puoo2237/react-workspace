import { useDispatch, useSelector } from "react-redux"
import RegCom from "../components/RegCom"
import { changeinput, regreset } from "../redux/inputSlice";
import { useNavigate } from "react-router-dom"
import { regThunk } from "../service/regThunk";

const RegCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const reg = useSelector(state => state.input.register)
    // console.log("reg con state: ", state)
    // return state.input.register;
    const onChange = (e) => {
        // dispatch(inputSlice.actions.changeinput)
        const { name, value } = e.target;
        dispatch(changeinput({ name, value, form: "register" }))
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        
        const resReg = await dispatch(regThunk(reg))
        console.log(resReg.payload)
        if (resReg.payload.success === 0) {
            nav('/list')
        } else {
            dispatch(regreset())
            alert(resReg.payload.message)
        }
        // console.log("reg con e.target: ", e.target)
    }
    return (<>
        <RegCom onChange={onChange} onSubmit={onSubmit} reg={reg} />
    </>)
}
export default RegCon