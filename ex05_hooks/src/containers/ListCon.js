import { useContext, useEffect, useReducer } from "react";
import ListCom from "../components/ListCom"
import { getList } from "../service/member";
import { initialState, reducer } from "../modules/member_red";
import { TestContext } from "../store/TestContext";

function ListCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data } = useContext(TestContext)
    useEffect(() => {
        try {
            dispatch({ type: "LOADING" })
            // setTimeout(() => {
                console.log("2초 후 실행")
                dispatch({ type: "LIST", data: getList()})
                dispatch({ type: "FINISHED" })
            // }, 2000)
            // throw new Error("에러 발생")
        } catch (e) {
            // console.log(e)
            // console.log(e.toString())
            dispatch({ type: "ERROR", msg: e.toString() })
        }
    }, [])
    // const [state, dispatch] = useReducer(reducer, initialData);
    return (<>
        data.num:{data.number} <br></br>
        <ListCom error={state.error} data={state.data} loading={state.loading} />
    </>)
}
export default ListCon;
