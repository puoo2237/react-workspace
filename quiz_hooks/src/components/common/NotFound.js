import { useNavigate, useParams } from "react-router-dom"

function NotFound() {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <>
            <h2>{params['*']} 해당 경로 페이지는 존재하지 않습니다.</h2>
            <button onClick={() => navigate('/')}>HOME으로 이동</button>
        </>
    )
}
export default NotFound