
function Ex01Com({ num, setNum }) {
    console.log("Ex01Com 실행: ", num);
    return (
        <>
            {num === 100 ? "num은 100과 같다." : "100과 다르다"}
            <br></br>
            num: {num} <br></br>
            <button onClick={setNum}>num++</button>
        </>
    )
}
export default Ex01Com;