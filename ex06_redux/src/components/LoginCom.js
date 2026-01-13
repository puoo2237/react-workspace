const LoginCom = ({ onSubmit, onChange, id, pwd }) => {
    return (<>
        <form onSubmit={onSubmit}>
            <input type="text" value={id} name="id" onChange={onChange} /> <br></br>
            <input type="text" value={pwd} name="pwd" onChange={onChange} /> <br></br>
            <button>로그인</button>
        </form>
    </>)
}
export default LoginCom