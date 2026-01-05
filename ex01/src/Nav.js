function Nav(props){
    console.log(props);
    const {name} = props;
    const {name: n} = props;
    const {name:m, addr} = props;
    return (
        <ul>
            <li><a href="/">{name}</a></li>
            <li><a href="/">{n}</a></li>
            <li><a href="/">{addr}</a></li>
        </ul>
    )
}
export default Nav;