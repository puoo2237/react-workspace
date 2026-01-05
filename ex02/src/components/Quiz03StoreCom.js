function Quiz03StoreCom({ store, InPerson, OutPerson }) {

    return (
        <>
            <div style={{ whiteSpace: 'pre-wrap' }}>{store.msg}</div>
            <hr></hr>
            <button onClick={InPerson}>입장</button>
            <button onClick={OutPerson}>퇴장</button>
        </>
    );
}
export default Quiz03StoreCom;