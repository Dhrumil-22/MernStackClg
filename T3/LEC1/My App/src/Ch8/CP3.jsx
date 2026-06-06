// 1. create one main file  cp.jsx and other 3 component files cp1,cp2,cp3.jsx
//  pass no 1 and no2 form cp.jsx to cp3.jsx 
//  calculate multiplaiction of the number using use context

import {useContext} from "react";
import {n1,n2} from "./CP.jsx"
function CP3(){
    const n1 =useContext(n1)
    const n2 =useContext(n2)
    return(
        <h1>welcome {n1*n2}</h1>
    )
}
export default CP3;