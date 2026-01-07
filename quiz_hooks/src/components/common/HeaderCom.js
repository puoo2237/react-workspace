import { Link, Outlet } from "react-router-dom";

function HeaderCom() {
    return (<>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/member/list">MEMBER</Link>
        <hr></hr>
        <Outlet />
    </>)
}
export default HeaderCom;