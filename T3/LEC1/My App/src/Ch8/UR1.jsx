// write react component to increse value by 5 while clicking on button.
//  init. vakue with 20 .
//  use reduce the hook to perform the task.

import { useReducer } from "react";
const initState = 0;
function reducer(state,action){
    if (action.type == 'incr'){
        return state+1;
    }
}
function UR1(){
    const[state,dispatch] = useReducer(reducer,initState);
    return(
        <button onClick={()=>dispatch({type:'incr'})}>Click me! {state}</button>
       
    )
}

export default UR1;