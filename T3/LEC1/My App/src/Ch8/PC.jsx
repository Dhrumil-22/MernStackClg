// write areact js program to perform the task as asked below
// 1. create one main file PC.jsx and a=other two component file C2 and C2.jsx 
// 2. pass fn and ln form PC to C2.jsx. and display welcome "ABC PQR" ABC is fn and PQR is ln


import {createContext} from "react";
import C1 from "./C1.jsx"

const fname = createContext();
const lname = createContext();
function PC(){
    return(
        <>
        <fname.provider value="ABC">
        <lname.provider value="PQR">
            <C1/>
        </lname.provider>
        </fname.provider>
        </>
    )
}
export default PC;
export {fname,lname};