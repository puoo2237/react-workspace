import { useParams } from "react-router-dom"
import MOneCom from "../../components/member/MOneCom"
import { getOne } from "../../service/member"
import { useEffect, useState } from "react";

function MOneCon() {
    const params = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            const res = await getOne(params.id)
            setUser(await res.json())
        }
        getUser()
        // setUser(getOne(params.id))
    }, [])
    return (
        <>
            <MOneCom user={user} />
        </>
    )
}
export default MOneCon