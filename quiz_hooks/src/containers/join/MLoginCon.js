import { useContext, useReducer } from "react";
import MLoginCom from "../../components/join/MLoginCom"
import { getOne, initialState, reducer } from "../../service/member";
import { AuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

function MLoginCon() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { login } = useContext(AuthContext)

    const onChange = (e) => {
        dispatch({
            type: "CHANGE_INPUT",
            name: e.target.name,
            value: e.target.value,
            form: "login"
        })
    }
    const loginCheck = async (user) => {
        try {
            const res = await getOne(user.id)
            if (!res.ok) {
                alert("없는 아이디")
                return -1;
            }
            const member = await res.json()
            if (user.id === member.id) {
                if (user.pwd === member.pwd) {
                    alert("로그인 성공")
                    return 0;
                } else {
                    alert("비밀번호 실패")
                    return 1;
                }
            } else {
                alert("없는 아이디")
                return -1;
            }
        } catch (error) {
            console.error("로그인 체크 오류:", error)
            alert("로그인 처리 중 오류가 발생했습니다.")
            return -1;
        }
    }
    const nav = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();

        const result = await loginCheck(state.login);
        if (result === 0) {
            login(state.login.id)
            nav('/')
        }

    }
    return (<>
        <MLoginCom onChange={onChange} onSubmit={onSubmit} user={state.login} />
    </>)
}
export default MLoginCon