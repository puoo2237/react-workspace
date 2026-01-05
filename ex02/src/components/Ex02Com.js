
function Ex02Com(props) {    
    const {arr, onBtn} = props;
    return (
        <>
        arr: {arr}<br></br>
        <button onClick={onBtn}>클릭</button>
        </>
    );
}
export default Ex02Com;