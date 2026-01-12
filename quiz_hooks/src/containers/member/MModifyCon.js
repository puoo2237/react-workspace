import { useNavigate, useParams } from "react-router-dom"
import MModifyCom from "../../components/member/MModifyCom"
import { useRef, useEffect, useReducer } from "react";
import { getOne, initialState, modOne, reducer } from "../../service/member";

function MModifyCon() {
    const params = useParams();
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [user, setUser] = useState({ id: "", pwd: "", check_pwd: "", name: "", addr: "" });
    const inputRef = useRef([]);
    const nav = useNavigate();

    useEffect(() => {
        dispatch({ type: "LOADING" })
        const fetchUser = async () => {
            const res = await getOne(params.id);
            let data = await res.json();
            data = { ...data, pwd: "", check_pwd: "" }
            Object.keys(data).forEach(k => dispatch({
                name: k, 
                value: data[k], 
                type: "CHANGE_INPUT",
                form: "modify"
            }))

            // setUser({ ...data, pwd: "", check_pwd: "" });
            dispatch({ type: "FINISHED" })
        };
        fetchUser();

    }, [params.id]);

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch({ type: "LOADING" })
        // 두 비밀번호가 같은 지 확인    
        if (state.modify['pwd'] === state.modify['check_pwd']) {
            delete state.modify.check_pwd;
            await modOne(state.modify)
            nav('/member/one/' + params.id)
            dispatch({ type: "FINISHED" })

        } else {
            inputRef.current[1].value = ""
            inputRef.current[2].value = ""
            inputRef.current[1].focus()
        }
    }


    const onChange = (e) => {
        console.log(state)
        dispatch({
            type: "CHANGE_INPUT",
            name: e.target.name,
            value: e.target.value,
            form: "modify"
        })
        // setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (<>
        <MModifyCom loading={state.loading} inputRef={inputRef} user={state.modify} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default MModifyCon