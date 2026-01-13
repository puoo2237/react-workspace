function MLoginCom({user, onSubmit, onChange}) {
    return (<>
        <form onSubmit={onSubmit}>
            <input type="text" name="id" value={user.id} placeholder="id" onChange={onChange}/><br></br>
            <input type="text" name="pwd" value={user.pwd} placeholder="pwd" onChange={onChange}/><br></br>
            <button>로그인</button>
        </form>
    </>)
}
export default MLoginCom