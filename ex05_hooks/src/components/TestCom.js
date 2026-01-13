const TestCom = ({ data, onPlus, onMinus }) => {
    return (<>
        number: {data.number}<br></br>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
    </>)
}
export default TestCom;