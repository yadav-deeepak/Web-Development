import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    let incCount = () =>{
        setCount((currCount)=>{
            return currCount + 1;
        });
        setCount((currCount)=>{
            return currCount + 1;
        });
        console.log(count);
    };

    return (
        <>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase count</button>
        </>
    );
}