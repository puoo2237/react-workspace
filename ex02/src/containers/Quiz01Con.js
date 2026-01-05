import { useState } from "react";
import Quiz01Com from "../components/Quiz01Com";

function Quiz01Con() {
    const [num, setNum] = useState(0);

    const plusNum = () => {
        setNum(num + 1);
    }

    const minusNum = () => {
        setNum(num - 1);
    }

    return (
        <>
            <Quiz01Com num={num} plusNum={plusNum} minusNum={minusNum} />
        </>
    );

}
export default Quiz01Con;