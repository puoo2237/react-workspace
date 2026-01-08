import { useState } from "react";
import QuizRadioCom from "../components/QuizRadioCom"

function QuizRadioCon() {
    const initialAges = [
        { key: 1, value: "10대", name: "age", isChecked: true },
        { key: 2, value: "20대", name: "age", isChecked: false },
        { key: 3, value: "30대", name: "age", isChecked: false },
    ]
    const [ages, setAges] = useState(initialAges);
    const onChange = (e) => {
        setAges(ages.map(age => ({ ...age, isChecked: age.key == e.target.id })))
        console.log(ages)
    }

    return (<>
        <QuizRadioCom ages={ages} onChange={onChange} />
    </>)
}
export default QuizRadioCon