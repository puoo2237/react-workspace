import { useState } from 'react';
import Quiz02Com from '../components/Quiz02Com';

function Quiz02Con() {

    const [msg, setMsg] = useState("");

    const InBtn = () => {
        setMsg("어서오세요^^");
    }
    const OutBtn = () => {
        setMsg("안녕히가세요~");
    }

    return (
        <>
            <Quiz02Com msg={msg} InBtn={InBtn} OutBtn={OutBtn} />
        </>
    );
}
export default Quiz02Con;