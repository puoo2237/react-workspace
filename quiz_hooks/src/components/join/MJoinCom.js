function MJoinCom({ inputRef, user, onSubmit, onChange }) {
    return (<>
        <form onSubmit={onSubmit}>
            <input ref={e=>inputRef.current[0] = e} type="text" name="id" value={user.id} placeholder="input id"
                onChange={onChange} required /><br></br>
            <input ref={e=>inputRef.current[1] = e} type="password" name="pwd" value={user.pwd} placeholder="input pwd"
                onChange={onChange} required /><br></br>
            <input ref={e=>inputRef.current[2] = e} type="password" name="check_pwd" value={user.check_pwd} placeholder="check pwd"
                onChange={onChange} required /><br></br>
            <input ref={e=>inputRef.current[3] = e} type="text" name="name" value={user.name} placeholder="input name"
                onChange={onChange} required /><br></br>
            <input ref={e=>inputRef.current[4] = e} type="text" name="addr" value={user.addr} placeholder="input addr"
                onChange={onChange} required /><br></br>
            <button>회원가입</button>
        </form>
    </>)
}
export default MJoinCom