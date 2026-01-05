function Header(props){
    console.log(props);
    return <h2>HEADER 영역<br></br>
    {props.test} - {props.number}</h2>
}
export default Header;