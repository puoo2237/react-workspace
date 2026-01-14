import { Link } from "react-router-dom"
const HeaderCom = ({ id, isLoggedIn, onLogout }) => {
    return (<>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/list">목록</Link> &nbsp;
        {isLoggedIn ? <>
            {id}님 환영합니다. &nbsp;
            <Link onClick={onLogout} to="/">로그아웃</Link> &nbsp;
        </>
            :
            <>
                <Link to="/login">로그인</Link> &nbsp;
                <Link to="/register">회원가입</Link> &nbsp;
            </>
        }
        <hr></hr>
    </>)
}
export default HeaderCom;