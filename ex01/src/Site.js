function Site(props) {
    let li = [];
    props.a_tag.forEach(list => {
        li.push(<li><a href={list.href}>{list.txt}</a></li>)
    });
    return (<>
        <nav>
            <ul>
                {li}
            </ul>
            <ul>
                {props.a_tag.map(list => {
                    return <li><a href={list.href}>{list.txt}</a></li>;
                })
                }
            </ul>
        </nav>
    </>);
}
export default Site;