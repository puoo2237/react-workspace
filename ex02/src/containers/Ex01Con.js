import Ex01Com from "../components/Ex01Com";
import { useState } from "react";

function Ex01Con() {
    const [num, updatedNum] = useState(100);
    // let num = 100;
    const setNum = () => {
        updatedNum(num + 1);
        console.log(num);
    }
    return (
        <>
            <Ex01Com num={num} setNum={setNum} />
        </>
    )
}
export default Ex01Con;