import { useParams } from "react-router-dom"
import MOneCom from "../../components/member/MOneCom"
import { getOne } from "../../service/member"
// import { useEffect, useState } from "react";

function MOneCon() {
    const params = useParams();
    const user = getOne(params.id)
    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     setUser(getOne(params.id))
    // }, [params])
    return (
        <>
            <MOneCom user={user} />
        </>
    )
}
export default MOneCon