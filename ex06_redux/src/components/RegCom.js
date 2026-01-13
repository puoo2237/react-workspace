const RegCom = ({onSubmit, onChange, reg}) => {
    return (<>
        <form onSubmit={onSubmit} >
            <input
                type="text"
                name="id"
                value={reg.id}
                onChange={onChange} /><br></br>
            <input
                type="text"
                name="pwd"
                value={reg.pwd}
                onChange={onChange} /><br></br>
            <input
                type="text"
                name="name"
                value={reg.name}
                onChange={onChange} /><br></br>
            <input
                type="text"
                name="addr"
                value={reg.addr}
                onChange={onChange} /><br></br>
            <button>회원가입</button>
        </form>
    </>)
}
export default RegCom