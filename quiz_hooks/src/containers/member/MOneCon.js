import { useParams } from "react-router-dom"
import MOneCom from "../../components/member/MOneCom"
import { getOne, initialState, reducer } from "../../service/member"
import { useEffect, useReducer, useState } from "react";

function MOneCon() {
    const params = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [user, setUser] = useState({});

    useEffect(() => {
        dispatch({ type: "LOADING" })
        const getUser = async () => {
            const res = await getOne(params.id)
            dispatch({
                type: "LIST",
                data: await res.json(),
                form: "one"
            })
            // setUser(await res.json())
        }
        getUser()
        // setUser(getOne(params.id))
        dispatch({ type: "FINISHED" })
    }, [params.id])
    return (
        <>
            <MOneCom loading={state.loading} user={state.one.data} />
        </>
    )
}
export default MOneCon