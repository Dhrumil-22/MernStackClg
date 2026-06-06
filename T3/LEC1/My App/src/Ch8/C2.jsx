// write areact js program to perform the task as asked below
// 1. create one main file PC.jsx and a=other two component file C2 and C2.jsx 
// 2. pass fn and ln form PC to C2.jsx. and display welcome "ABC PQR" ABC is fn and PQR is ln


import {useContext} from "react";
import {fname,lname} from "./PC.jsx"
function C2(){
    const fn =useContext(fname)
    const ln =useContext(lname)
    return(
        <h1>welcome {fn} {ln}</h1>
    )
}
export default C2;