import { useNavigate } from "react-router-dom";

function MOneCom({ loading, user }) {
    const navigate = useNavigate();
    return (
        <>
            {loading ? <h3>loading...</h3> : (
                <div>
                    <ul>
                        <li>id: {user && user.id}</li>
                        <li>pwd: {user && user.pwd}</li>
                        <li>name: {user && user.name}</li>
                        <li>addr: {user && user.addr}</li>
                    </ul>
                    <button onClick={() => navigate('/member/delete/' + user.id)}>삭제</button>
                    <button onClick={() => navigate('/member/modify/' + user.id)}>수정</button>
                </div>
            )}
        </>
    )
}
export default MOneCom