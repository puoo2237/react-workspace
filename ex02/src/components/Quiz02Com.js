function Quiz02Com({ msg, InBtn, OutBtn }) {

    return (
        <>
            {msg === "" ? <b>값이 존재하지 않음!!!!</b> : msg}
            <br />
            <button onClick={InBtn}>IN</button>
            <button onClick={OutBtn}>OUT</button>
        </>
    );
}
export default Quiz02Com;   