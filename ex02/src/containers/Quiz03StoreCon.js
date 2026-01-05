import Quiz03StoreCom from "../components/Quiz03StoreCom";
import { useState } from "react";

function Quiz03StoreCon() {
    const [store, setStore] = useState({ msg: "", inData: 0, outData: 0 });

    const InPerson = () => {
        setStore({ ...store, inData: store.inData + 1 });
    }

    const OutPerson = () => {

        if (store.inData <= store.outData) {
            alert("나갈 손님이 없습니다.");
        } else {
            setStore({ ...store, outData: store.outData + 1 });
        }
    }
    store.msg = (store.inData === 0) && (store.outData === 0) ?
        "오픈 전입니다." : `오늘 입장한 고객: ${store.inData}명 입니다.\n오늘 퇴장한 고객: ${store.outData}명 입니다.\n현재 입장한 고객: ${store.inData - store.outData}명 입니다.`
    return (
        <>
            <Quiz03StoreCom store={store} InPerson={InPerson} OutPerson={OutPerson} />
        </>
    );
}
export default Quiz03StoreCon;