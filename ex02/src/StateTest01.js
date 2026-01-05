import {useState} from "react";
function StateTest01() {
    // let num=0;
    const [num, setNum] = useState(0); // 변경된 값이 적용이 안되어 return 값에 반영이 안됨 => 함수가 재렌더링되도록 도와주는 함수
    // let str = "안녕하세요";
    const [str, setStr] = useState("안녕하세요"); 
    
    console.log("start: " + num);
    const click = () => {
        console.log("click: ", num)
        // num++;
        setNum(num + 1) // num++
    }
    console.log("end: " + num);
    const click2 = () => {
        setStr("반갑습니다");
    }
    return (
        <>
            str: {str}<br></br>
            num: {num}<br></br>
            <button onClick={click}>클릭</button>
            <button onClick={click2}>클릭2</button>
        </>
    )

}
export default StateTest01;