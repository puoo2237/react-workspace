import { useNavigate, useParams } from "react-router-dom"
import { delOne } from "../../service/member";
import { useEffect } from "react";

function MDeleteCon() {

    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        delOne(params.id)
        alert("삭제되었습니다.")
        navigate('/member/list')
    })

    return null
}
export default MDeleteCon