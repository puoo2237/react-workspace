import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom"
import { getData } from "../../service/member"

function MListCon() {
    const [member, setMember] = useState([]);

    useEffect(() => {
        const getMember = async () => {
            const res = await getData()
            setMember(await res.json())
        }
        getMember();
        // setMember(getData())
    }, [])

    return (
        <>
            <MListCom member={member} />
        </>
    )
}
export default MListCon