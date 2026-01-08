import { useState } from "react"
import Input02Com from "../components/Input02Com"

function Input02Con() {
    const [name, setName] = useState("");
    const [addr, setAddr] = useState("");
    const [age, setAge] = useState("");
    const [data, setData] = useState({ name01: "", addr01: "", age01: "" });
    const onChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})

        // console.log(e.target)
        if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "addr") {
            setAddr(e.target.value)
        } else if (e.target.name === "age") {
            setAge(e.target.value)
        }
    }
    return (<>
        <Input02Com onChange={onChange} name={name} addr={addr} age={age} data={data} />
    </>)
}
export default Input02Con