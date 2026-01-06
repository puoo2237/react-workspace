import MUpdateCom from "../../components/member/MUpdateCom"
import { getOne, memberUpdate } from "../../service/member/member";
import { useParams } from "react-router-dom";

function MUpdateCon() {
    const params = useParams()

    memberUpdate(params.username)  
    const user = getOne(params.username)  

    return (
        <>
        <MUpdateCom user={user} />
        </>
    );
}
export default MUpdateCon;