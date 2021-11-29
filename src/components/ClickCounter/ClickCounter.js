import { useEffect, useState } from "react";

const ClickCounter = () => {

    const [count, setCount] = useState(0);

    useEffect( () => {

    }, []); //array de dependencias vacío -> ejecuta la función cuando ocurre el montajex
    return (
        <div>
            <h1 onClick={() => setCount(count+1)}>{count}</h1>            
            <button onClick={() => setCount(0)}>reset count</button>
        </div>
    );

};

export default ClickCounter;