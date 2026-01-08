function Input01Com({ input, onSubmit01, onChange }) {
    return (<>
        <form onSubmit={onSubmit01} action="https://www.naver.com">
            <input type="text" value={input.username} name="username" onChange={onChange} /><br></br>
            <input type="text" value={input.addr} name="addr" onChange={onChange} /><br></br>
            <input type="submit" value="input" />
            <input type="button" value="input" />
            <button type="submit">btn</button>
            <button type="button">btn</button>
            <button>btn</button>
        </form>
    </>)
}
export default Input01Com