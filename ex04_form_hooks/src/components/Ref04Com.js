function Ref04Com({ input, onChange, onSubmit, inputId, inputPwd, inputArr }) {
    return (<>
        <form onSubmit={onSubmit}>
            <input ref={inputId} type="text" onChange={onChange} name="username"
                value={input.username} /><br></br>
            <input ref={inputPwd} type="password" onChange={onChange} name="password"
                value={input.password} /><br></br>
            <input ref={e => inputArr.current[0] = e} type="text" onChange={onChange} name="addr"
                value={input.addr} /><br></br>
            <input ref={e => inputArr.current[1] = e} type="text" onChange={onChange} name="age"
                value={input.age} /><br></br>
            <button>로그인</button>
        </form>
    </>)
}
export default Ref04Com;