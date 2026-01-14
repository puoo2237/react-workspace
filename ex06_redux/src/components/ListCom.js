const ListCom = ({ loading, error, data }) => {
    if(loading){
        return <h3>로딩중...</h3>
    }
    if(error){
        return <h3>{error}</h3>
    }
    return (<>
        {data && data.map(d => (<div key={d.id}>
            <span>{d.id}</span>&nbsp;
            <span>{d.name}</span>&nbsp;
            <span>{d.addr}</span>&nbsp;
        </div>))}
    </>)
}
export default ListCom