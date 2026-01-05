function Child(props) {
    const {a, b} = props.children
    console.log(props);
    return (<>
    {a} - {b} {props.n} - {props.children}</>);
}
export default Child;

