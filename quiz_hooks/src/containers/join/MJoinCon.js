import { useNavigate } from "react-router-dom"
import MJoinCom from "../../components/join/MJoinCom"
import { useRef, useState } from "react";
import { addOne, getOne } from "../../service/member";

function MJoinCon() {
    const initialUser = { id: "", pwd: "", check_pwd: "", name: "", addr: "" }
    const [user, setUser] = useState(initialUser);
    const inputRef = useRef([]);
    const nav = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();

        // 회원가입 여부 확인
       const res = await getOne(user.id);
       const existUser = res.json()
        
        if (existUser) {
            alert("이미 가입되어있는 회원입니다.")
        } else {
            if (user['pwd'] === user['check_pwd']) {
                const newUser = { ...user };
                delete newUser.check_pwd;
                await addOne(newUser);
                nav('/member/list')
            } else {
                inputRef.current[1].value = ""
                inputRef.current[2].value = ""
                inputRef.current[1].focus()
            }
        }

    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (<>
        <MJoinCom inputRef={inputRef} user={user} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default MJoinCon