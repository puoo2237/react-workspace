import { Link, Outlet } from "react-router-dom";

function HeaderCom({auth, onLogout}) {
    return (<>
        <header>
            <Link to="/">HOME</Link> &nbsp;
            <Link to="/member/list">MEMBER</Link> &nbsp;
            {auth.isLoggedIn ? (
                <>
                    <span>{auth.user}님이 로그인</span> &nbsp;
                    <Link to="/" onClick={onLogout}>로그아웃</Link> &nbsp;
                </>
            ) : (
                <>
                    <Link to="/login">로그인</Link> &nbsp;
                    <Link to="/join">회원가입</Link> &nbsp;
                </>
            )}
            <hr></hr>
        </header>
        <main>
            <Outlet />
        </main>
    </>)
}
export default HeaderCom;