function Main(props) {
    const { tel, nick, myClick } = props;
    const test = () => {
        alert('클릭2');
    }
    return <>
        <h3>
            전화번호: {tel}
        </h3>
        <h3>
            별명: {nick}
        </h3>
        <button onClick={myClick}>클릭</button>
        <button onClick={test}>클릭2</button>
    </>
}
export default Main;