import { useState } from "react"
import Input01Com from "../components/Input01Com"

function Input01Con() {
    const [input, setInput] = useState(
        { username: "연습", addr: "" }
    );
    const onChange = (e) => {
        console.log(e.target.value)
        // setInput({ username: e.target.value, addr: "" })
        setInput({ ...input, [e.target.name]:e.target.value})
    }

    const onSubmit01 = (e) => {
        e.preventDefault();
        // alert("실행???")
        console.log(e.target)
    }
    return (<>
        <Input01Com input={input} onSubmit01={onSubmit01} onChange={onChange} />
    </>)
}
export default Input01Con