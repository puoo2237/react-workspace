import { useDispatch, useSelector } from "react-redux"
import HeaderCom from "../components/HeaderCom"
import { logout } from "../redux/authSlice"

const HeaderCon = () => {
    const dispatch = useDispatch()
    const { id, isLoggedIn } = useSelector(state => {
        // console.log("header state: ", state)
        return state.auth
    })
    const onLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (<>
        <HeaderCom id={id} isLoggedIn={isLoggedIn} onLogout={onLogout} />
    </>)
}
export default HeaderCon