import Ex02Com from '../components/Ex02Com';
import { useState } from 'react';
function Ex02Con() {
    const [arr, setArr] = useState([1, 2]);
    console.log("시작 arr : ", arr);
    const onBtn = () => {
        // arr.push("데이터 추가")
        // const arr2 = [...arr, '추가~']
        const arr2 = arr.concat('추가~')
        console.log("추가 후 arr : ", arr2);
        setArr(arr2)
    }
    return (
        <>
            <Ex02Com arr={arr} onBtn={onBtn} />
        </>
    );
}
export default Ex02Con;