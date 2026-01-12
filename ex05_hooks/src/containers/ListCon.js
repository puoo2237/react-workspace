import { useEffect, useReducer } from "react";
import ListCom from "../components/ListCom"
import { getList } from "../service/member";
import { initialData, initialState, reducer } from "../modules/member_red";

function ListCon() {
    useEffect(() => {
        try {
            dispatch({ type: "LOADING" })
            setTimeout(() => {
                console.log("2초 후 실행")
                const data = getList();
                dispatch({ type: "LIST", data })
                dispatch({ type: "FINISHED" })
            }, 2000)
            // throw new Error("에러 발생")
        } catch (e) {
            // console.log(e)
            // console.log(e.toString())
            dispatch({ type: "ERROR", msg: e.toString() })
        }
    }, [])
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [state, dispatch] = useReducer(reducer, initialData);
    return (<>
        <ListCom error={state.error} data={state.data} loading={state.loading} />
    </>)
}
export default ListCon;
