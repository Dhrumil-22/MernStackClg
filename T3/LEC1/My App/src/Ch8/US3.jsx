// create a react component that manages multiple form input fileds using a single state object and diplays the values in real time. 

import { useState } from "react";
function US3(){
    const[data,setData]=useState({});
    function handleChange(e){
        const{name,value} = e.target;
        setData({...data,[name]:value});
    }
    return(
        <div>
            <input type='text' name='fn' onChange={(handleChange)}/><br></br>
            <input type='text' name='ln' onChange={(handleChange)}/><br></br>
            <h1>Firstname : {data.fn}</h1>
            <h1>lastname : {data.ln}</h1>
        </div>
    )
}
export default US3;


// create a react component that manages multiple form input fileds using a single state object and diplays the values in real time. 