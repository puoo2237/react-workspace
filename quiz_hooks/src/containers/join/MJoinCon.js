import { useNavigate } from "react-router-dom"
import MJoinCom from "../../components/join/MJoinCom"
import { useReducer, useRef } from "react";
import { addOne, getOne } from "../../service/member";
import { initialState, reducer } from "../../service/member"


function MJoinCon() {
    // const initialUser = { id: "", pwd: "", check_pwd: "", name: "", addr: "" }
    // const [user, setUser] = useState(initialUser);
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef([]);
    const nav = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOADING" })
        // 회원가입 여부 확인
        const res = await getOne(state.join.id);
        if (res.ok) {
            alert("이미 가입되어있는 회원입니다.")
        } else {
            if (state.join.pwd === state.join.check_pwd) {
                const newUser = { ...state.join };
                delete newUser.check_pwd;
                await addOne(newUser);
                nav('/member/list')
                dispatch({ type: "FINISHED" })
            } else {
                inputRef.current[1].value = ""
                inputRef.current[2].value = ""
                inputRef.current[1].focus()
            }
        }

    }

    const onChange = (e) => {
        dispatch({
            type: "CHANGE_INPUT",
            name: e.target.name,
            value: e.target.value,
            form: "join"
        })
        // setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (<>
        <MJoinCom loading={state.loading} inputRef={inputRef} user={state.join} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default MJoinCon