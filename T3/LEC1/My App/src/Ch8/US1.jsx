// create a program to built react app having buttons to increment and decrement the numberby clicking that respective button
// also increment of that number should be perform only if number is less that 10 and the decrement of the number should be perform if the number is greter that 0.

import { useState } from "react";
function US1(){
    const[num,setCount]=useState(0);
    function incCo(){
        if(num<10){
        setCount(num+1)
        }
    }
    function decCo(){
        if(num>0){
        setCount(num-1)
        }
    }
    return(
        <div>
            <h1>The number is {num}..</h1>
            <button onClick={incCo}>INCREMENT</button><br></br>
            <button onClick={decCo}>DECREMENT</button>
        </div>
    )
}
export default US1;