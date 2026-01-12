import { useEffect, useReducer, useState } from "react";
import MListCom from "../../components/member/MListCom"
import { getData, initialState, reducer } from "../../service/member"

function MListCon() {
    // const [member, setMember] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getMember = async () => {
            dispatch({ type: "LOADING" })
            const res = await getData()
            dispatch({
                type: "LIST",
                data: await res.json(),
                form: "all"
            })
            // setMember(await res.json())
        }
        getMember();
        dispatch({ type: "FINISHED" })
        // setMember(getData())
    }, [])
    // console.log("list state: ", state)

    return (
        <>
            <MListCom loading={state.loading} member={state.all.data} />
        </>
    )
}
export default MListCon