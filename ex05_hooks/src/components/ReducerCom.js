function ReducerCom({state, onClick, onDown}) {
    console.log("state: ", state)
    return(<>
    Value: {state.value} <br></br>
    Name: {state.name} <br></br>
    <button onClick={onClick}>클릭</button>
    <button onClick={onDown}>클릭(Down)</button>
    </>)
}
export default ReducerCom;
