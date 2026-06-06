// write areact js program to perform the task as asked below
// 1. create one main file PC.jsx and a=other two component file C2 and C2.jsx 
// 2. pass fn and ln form PC to C2.jsx. and display welcome "ABC PQR" ABC is fn and PQR is ln

import C2 from "./C2.jsx"
function C1(){
    return(
        <C2/>
    )
}
export default C1;