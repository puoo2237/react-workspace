import { useState } from "react"
import CheckBox03Com, { CheckComponent } from "../components/CheckBox03Com"

const initialCheckboxs = [
    { key: 1, label: "게임", isChecked: false },
    { key: 2, label: "멍", isChecked: false },
    { key: 3, label: "잠", isChecked: false }
]

function CheckBox03Con() {
    const [hobby, setHobby] = useState(initialCheckboxs)
    const [isChecked, setIsChecked] = useState(false)
    const onChangeHobby = (e) => {
        setHobby(initialCheckboxs.map(r => {
            if (r.key == e.target.id) {
                r.isChecked = !r.isChecked
            }
            return r
        }
        ))
    }

    const onChange = () => {
        setIsChecked(!isChecked)
    }
    return (<>
        <CheckComponent onChangeHobby={onChangeHobby} hobby={hobby} />
        <hr></hr>
        <CheckBox03Com onChange={onChange} isChecked={isChecked} />
    </>)
}
export default CheckBox03Con