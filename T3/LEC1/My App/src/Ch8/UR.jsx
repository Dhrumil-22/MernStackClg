// write react component to increse value by 5 while clicking on button.
//  init. vakue with 20 .
//  use reduce the hook to perform the task.

import { useReducer } from "react";
function reducer(state,action){
    return stateaction;
}
function UR(){
    const[state,dispatch] = useReducer(reducer,20);
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Add</button>
        </div>
    )
}

export default UR;