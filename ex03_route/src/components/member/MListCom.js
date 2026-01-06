import { Link } from "react-router-dom";

function MListCom({ list, onDelete, indexBtn, beforeBtn }) {


    return (
        <>
            {list && list.map(data => {
                return <div key={data.id}>
                    <span>{data.id}</span>
                    <span>
                        <Link to={"/member/one?id=" + data.id}>{data.name}</Link>
                    </span>
                    <span>{data.addr}</span>
                    <button onClick={() => { onDelete(data.id) }}>삭제</button>
                    <Link to={"/member/update/"+data.id}>업데이트</Link><br></br>
                </div>
            })}
            <hr></hr>
            <Link to="/member/one?id=1">1. 회원 목록</Link><br></br>
            <Link to="/member/one?id=2">2. 회원 목록</Link><br></br>
            <Link to="/member/one?id=2">3. 회원 목록</Link><br></br>
            <Link to="/member/one?id=3">4. 회원 목록</Link>          
            <hr></hr>
            <div onClick={indexBtn}>index 이동</div>
            <button onClick={beforeBtn}>이전</button>
        </>
    );
}
export default MListCom;