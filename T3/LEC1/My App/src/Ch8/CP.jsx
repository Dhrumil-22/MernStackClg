// 1. create one main file  cp.jsx and other 3 component files cp1,cp2,cp3.jsx
//  pass no 1 and no2 form cp.jsx to cp3.jsx 
//  calculate multiplaiction of the number using use context


import {createContext} from "react";
import CP1 from "../CP1.jsx"

const n1 = createContext();
const n2 = createContext();
function CP(){
    return(
        <>
            <n1.Provider value="28">
            <n2.Provider value="11">
                <CP1/>
            </n2.Provider>
            </n1.Provider>
        </>
    )
}
export default CP;
export {n1,n2};