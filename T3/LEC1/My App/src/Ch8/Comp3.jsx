import { useContext } from "react";
import {cc} from './COMP1.jsx';
import {cc1} from './COMP2.jsx';

function COMP3(){
    const css =useContext(cc)
    const name =useContext(cc1)
    return(
        <h1 style={css}>{name}</h1>
    )
} 
export default COMP3;