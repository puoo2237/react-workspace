import { useEffect, useState } from "react";

function IndexPage() {
    
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    useEffect(() => {
        console.log("useEffect 실행: ", num)
    }, [num2]) // num2 변경 시 ,useEffect 실행
    const onClick = () => {
        setNum(num + 1)
    }
    const onClick2 = () => {
        setNum2(num2 + 1)
    }
    return (
        <>  
            <h2>useEffect 확인 페이지</h2><br></br>
            num: {num},  num2: {num2}<hr></hr>
            <button onClick={onClick}>클릭</button>
            <button onClick={onClick2}>클릭2</button>
        </>
    );
}
export default IndexPage;