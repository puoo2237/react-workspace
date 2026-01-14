import { useDispatch, useSelector } from "react-redux"
import ListCom from "../components/ListCom"
import { useEffect } from "react"
// import { getList } from "../service/member"
// import { list } from "../redux/memberDataSlice"
import { memberThunk } from "../service/memberThunk"
const ListCon = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(memberThunk("mem"))
        // const getMList = async () => {

        //     const res = await getList();
        //     const mlist = await res.json()
        //     console.log("list con list: ", mlist)
        //     dispatch(list(mlist))
        // }
        // getMList()
    }, [dispatch])

    const { data, loading, error } = useSelector((state) => {
        // console.log("list con state: ", state)
        return state.memberData
    })
    // console.log("list con m list: ", memberList)
    return (<>
        <ListCom loading={loading} error={error} data={data} />
    </>)
}
export default ListCon