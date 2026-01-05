function Quiz03StoreCom({ store, InPerson, OutPerson }) {

    return (
        <>
            {store.msg}
            <hr></hr>
            <button onClick={InPerson}>입장</button>
            <button onClick={OutPerson}>퇴장</button>
        </>
    );
}
export default Quiz03StoreCom;