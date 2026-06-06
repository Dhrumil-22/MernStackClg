import { createContext } from "react";
import COMP3 from './COMP3.jsx';
const cc1 =createContext()
function COMP2(){
    return(
        <cc1.Provider value="Studs">
            <COMP2/>
        </cc1.Provider>
    )
} 
export default COMP2;
export {cc1};