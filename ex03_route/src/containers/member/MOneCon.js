import { useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom"
import { getOne } from "../../service/member/member";
import { useEffect, useState } from "react";

function MOneCon() {
    const [params] = useSearchParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(getOne(params.get("id")))
    }, [params])

    return (
        <>
            <MOneCom user={user} />
        </>
    );
}
export default MOneCon;