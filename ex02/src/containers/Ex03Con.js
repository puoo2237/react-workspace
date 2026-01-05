import Ex03Com from "../components/Ex03Com";
import { useState } from "react";

function Ex03Con() {
    const [obj, setObj] = useState({});

    if(Object.keys(obj).length === 0){
        setObj({name : "홍길동", addr : "산골짜기"});
    }

    const onChangeName = () => {
        setObj({...obj, name : "이순신"});
    }
    const onChangeAddr = () => {
        setObj({...obj, addr : "서울"});
    }
    return (
        <>
            <Ex03Com obj={obj} onChangeName={onChangeName} onChangeAddr={onChangeAddr}/>
        </>
    );
}
export default Ex03Con;