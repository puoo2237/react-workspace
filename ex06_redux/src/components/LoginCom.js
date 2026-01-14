const LoginCom = ({ loading, error, result, onSubmit, onChange, id, pwd }) => {
    return (<>
        <form onSubmit={onSubmit}>
            <input type="text" value={id} name="id" onChange={onChange} /> <br></br>
            <input type="text" value={pwd} name="pwd" onChange={onChange} /> <br></br>
            <button disabled={loading}>로그인</button>
            {loading && <p>로그인 중입니다...</p>}
            {error && <p>문제 발생 : {error}</p>}
            {result === 1 && <p>아이디 또는 비번 불일치</p>}
        </form>
    </>)
}
export default LoginCom