import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom"
import { getData } from "../../service/member"

function MListCon() {
    const [member, memberSet] = useState([]);

    useEffect(() => {
        memberSet(getData())
    })

    return (
        <>
            <MListCom member={member} />
        </>
    )
}
export default MListCon