import { useNavigate, useParams } from "react-router-dom"
import MModifyCom from "../../components/member/MModifyCom"
import { useRef, useState, useEffect } from "react";
import { getOne, modOne } from "../../service/member";

function MModifyCon() {
    const params = useParams();
    const [user, setUser] = useState({ id: "", pwd: "", check_pwd: "", name: "", addr: "" });
    const inputRef = useRef([]);
    const nav = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getOne(params.id);
            const data = await res.json();
            setUser({ ...data, pwd: "", check_pwd: "" });
        };
        fetchUser();
    }, [params.id]);

    const onSubmit = async (e) => {
        e.preventDefault();

        // 두 비밀번호가 같은 지 확인    
        if (user['pwd'] === user['check_pwd']) {
            delete user.check_pwd;
            await modOne(user)
            nav('/member/one/' + params.id)
        } else {
            inputRef.current[1].value = ""
            inputRef.current[2].value = ""
            inputRef.current[1].focus()
        }
    }


    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (<>
        <MModifyCom inputRef={inputRef} user={user} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default MModifyCon