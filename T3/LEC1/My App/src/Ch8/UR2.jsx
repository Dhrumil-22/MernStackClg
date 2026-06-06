// create react app to increse value by 1 while clicking on button 'incr' and - 1 whicle click oon "decr". init value is 0

import { useReducer } from "react";
const initState = 0;
function reducer(state,action){
    if (action.type === 'Decr'){
        return (state-(1));
    }
    if (action.type === 'incr'){
        return state+1;
    }
}
function UR2(){
    const[state,dispatch] = useReducer(reducer,initState);
    return(
        <>
        <h1>COUNT : {state}</h1>
        <button onClick={()=>dispatch({type:'incr'})}>Incr</button>
        <button onClick={()=>dispatch({type:'Decr'})}>Decr</button>
       </>
    )
}

export default UR2;