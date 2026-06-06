// 1. create one main file  cp.jsx and other 3 component files cp1,cp2,cp3.jsx
//  pass no 1 and no2 form cp.jsx to cp3.jsx 
//  calculate multiplaiction of the number using use context

import CP2 from "../CP2.jsx"
function CP1(){
    return(
        <CP2/>
    )
}
export default CP1;