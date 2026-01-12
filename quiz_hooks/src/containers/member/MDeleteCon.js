import { useNavigate, useParams } from "react-router-dom"
import { delOne, initialState, reducer } from "../../service/member";
import { useEffect, useReducer } from "react";

function MDeleteCon() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch({ type: "LOADING" })
        delOne(params.id)
        alert("삭제되었습니다.")
        navigate('/member/list')
        dispatch({ type: "FINISHED" })
    }, [])

    return state.loading ? <h3>loading...</h3> : null
}
export default MDeleteCon