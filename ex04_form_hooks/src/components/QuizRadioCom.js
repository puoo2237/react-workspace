function QuizRadioCom({ ages, onChange }) {
    return (<>
        <form>
            {ages.map(age => <label key={age.key} htmlFor={age.key}><input id={age.key} type="radio" name={age.name} value={age.value} checked={age.isChecked} onChange={onChange} />
                {age.value}</label>)}
        </form>
    </>)
}
export default QuizRadioCom