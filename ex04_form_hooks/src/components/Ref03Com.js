function Ref03Com({ number, onRef, onState }) {
    return (<>
        number: {number.current} <br></br>
        <button onClick={onRef}>ref</button>
        <button onClick={onState}>state</button>
    </>)
}
export default Ref03Com;