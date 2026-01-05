
function Quiz01Com(props) {
    const { num, plusNum, minusNum } = props;

    return (
        <>
            <h2>{num}</h2>
            <hr></hr>
            <br></br>
            <button onClick={plusNum}>+</button>
            <button onClick={minusNum}>-</button>
        </>
    );
}
export default Quiz01Com;