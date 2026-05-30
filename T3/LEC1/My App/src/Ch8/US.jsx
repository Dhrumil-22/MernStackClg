import { useState } from "react";
function US(){
    const[count,setCount]=useState(0);
    function handleCount(){
        setCount(count+1)
    }
    return(
        <div>
            <h1>You Clicked {count} times..</h1>
            <button onClick={handleCount}>Click Me!</button>
        </div>
    )
}
export default US;