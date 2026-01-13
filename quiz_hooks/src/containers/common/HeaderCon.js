import { useContext } from "react";
import HeaderCom from "../../components/common/HeaderCom";
import { AuthContext } from "../../store/AuthContext";

function HeaderCon() {
    const { auth, logout } = useContext(AuthContext);
    // console.log(auth)

    const onLogout = () => {
        logout();
    }

    return (<>
        <HeaderCom onLogout={onLogout} auth={auth} />
    </>)
}
export default HeaderCon