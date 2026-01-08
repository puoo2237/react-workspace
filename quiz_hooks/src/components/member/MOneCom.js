import { useNavigate } from "react-router-dom";
import MDeletePage from "../../pages/member/MDeletePage"

function MOneCom({ user }) {
    const navigate = useNavigate();
    return (
        <>
            <ul>
                <li>id: {user.id}</li>
                <li>pwd: {user.pwd}</li>
                <li>name: {user.name}</li>
                <li>addr: {user.addr}</li>
            </ul>
            <button onClick={() => navigate('/member/delete/' + user.id)}>삭제</button>
        </>
    )
}
export default MOneCom