function QuizRadioCom({ ages, onChange, onSubmit }) {
    return (<>
        <form onSubmit={onSubmit}>
            {ages.map(age => <label key={age.key} htmlFor={age.key}><input id={age.key} type="radio" name={age.name} value={age.value} checked={age.isChecked} onChange={onChange} />
                {age.value}</label>)}
            <button>클릭</button>
        </form>
    </>)
}
export default QuizRadioCom