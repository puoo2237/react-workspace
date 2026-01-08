function Input02Com({ name, addr, age, data, onChange }) {
    return (<>
        <input type="text" name="name01" value={data.name01} onChange={onChange} /><br></br>
        <input type="text" name="addr01" value={data.addr01} onChange={onChange} /><br></br>
        <input type="text" name="age01" value={data.age01} onChange={onChange} />
        <hr></hr>
        <input type="text" name="name" value={name} onChange={onChange} /><br></br>
        <input type="text" name="addr" value={addr} onChange={onChange} /><br></br>
        <input type="text" name="age" value={age} onChange={onChange} />
    </>)
}
export default Input02Com