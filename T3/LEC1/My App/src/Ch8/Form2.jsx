//  create react app which contains form with following fileds name,email,password ,confirm password,submit button .
// when the form submitted the values fo passwrod and cpass must be same else it will give an error msg in alert box 
// also length of the password must be greter then 8 else it will give an error msg in alert box 
// if form submitted succefully then disply entered name and emilid in the alertbox .
// use usestate hook

import { useState } from "react";
function Form2(){
    const [formdata,setFormdata] =useState({});
    function handleform(e){
        const{name,value} = e.target;
        setFormdata({...formdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        if (formdata.pass != formdata.cpass){
             alert("password is not Valid")
        }
        else if (formdata.pass.length<8){
            alert('password length is less then 8.')
        }
        else{
             alert("your form is sucessfully submiteed..\nName:"+formdata.fname+"\nEmail:"+formdata.email)
        }

    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label htmlFor="fname">Name:</label>
                <input type="text" id="fname" name='fname' onChange={handleform} required></input><br/><br/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' onChange={handleform} required></input><br/><br/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='pass' onChange={handleform} required></input><br/><br/>

                <label htmlFor="password">Confirm Password</label>
                <input type="password" id="password" name='cpass' onChange={handleform} required></input><br/><br/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
} 

export default Form2;