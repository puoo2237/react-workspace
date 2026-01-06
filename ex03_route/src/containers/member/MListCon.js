import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom"
import { getData } from "../../service/member/member";
import { useNavigate } from "react-router-dom";

function MListCon() {
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(getData())
    }, []) // []를 추가하면 딱 한 번만 실행 (초기화)
    // const [n, setN] = useState(0);
    // const onClickOk = () => { setN(n + 1) }
    // const onClickNo = (id) => { console.log(id + "랜더링 안됨") }

    const navigate = useNavigate();
    const onDelete = (id) => {
        navigate("/member/delete/" + id)
    }
    const indexBtn = () => navigate("/"); // 홈
    const beforeBtn = () => navigate(-1); // 이전
    return (
        <>
            {/* <button onClick={onClickOk}>랜더링</button>
            <button onClick={() => { onClickNo("bbb") }}>랜더링 안됨</button> <br></br> */}
            <MListCom list={list} onDelete={onDelete} indexBtn={indexBtn} beforeBtn={beforeBtn} />
        </>
    );
}
export default MListCon;