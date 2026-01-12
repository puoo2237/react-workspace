import { Link } from "react-router-dom"

function MListCom({ error, loading, member }) {

    return (
        <>
            {/* <div>
                <table border="1">
                    <thead>
                        <tr>
                            {Object.keys(member[0]).map((header) => <th>{header}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {member.map((mem, idx) => {
                            const tr = Object.values(mem)
                            return <tr>
                                {tr.map((td) => <td>{td}</td>)}
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div> */}
            {loading ? <h3>로딩중</h3> : (error ? <h3>{error}</h3> : <div>
                <table border="1">
                    <thead>
                        <tr key="head">
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {member && member.map((mem) => {
                            return <tr key={mem.id}>
                                <td>{mem.id}</td>
                                <td><Link to={"/member/one/" + mem.id}>{mem.name}</Link></td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
            )}

        </>
    )
}
export default MListCom