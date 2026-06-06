import { createContext } from "react";
import COMP2 from './COMP2.jsx';
const cc =createContext()
const mycss = {color:'blue',fontSize:'25px'}
function COMP1(){
    return(
        <cc.Provider value={mycss}>
            <Comp2/>
        </cc.Provider>
    )
}
export default COMP1;
export {cc};
