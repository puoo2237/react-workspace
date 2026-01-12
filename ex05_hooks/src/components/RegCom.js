function RegCom({ loading, error, onSubmit, onChange, reg }) {
    return (<>
        {loading ? (<h3>회원가입 중...</h3>) : (error ? (<h3>{error}</h3>) : (<form onSubmit={onSubmit} >
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
        </form>))}

    </>)
}
export default RegCom;