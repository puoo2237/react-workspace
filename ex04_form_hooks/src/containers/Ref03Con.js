import { useRef, useState } from "react";
import Ref03Com from "../components/Ref03Com";

function Ref03Con() {
    const number = useRef(0); // 랜더링이 되지 않지만, 값이 변화하기 때문에 태그의 id로 많이 쓰임
    const [num, setNum] = useState(0);
    const onState = () => { setNum(num + 100); }
    const onRef = () => { number.current = number.current + 1; console.log(number.current)};
    return (<>
        <Ref03Com number={number} onRef={onRef} onState={onState} />
    </>)
}
export default Ref03Con;