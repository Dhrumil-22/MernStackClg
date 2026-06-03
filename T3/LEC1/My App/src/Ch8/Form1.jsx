//  create react app which contains form with following fileds fn,email,password,msg[textarea],gender(radio),city(dropdown).
// display submitted value in alert box .
// use usestate hook

import { useState } from "react";
function Form1(){
    const [formdata,setFormdata] =useState({});
    function handleform(e){
        const{name,value} = e.target;
        setFormdata({...formdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        alert("your form is sucessfully submiteed..\nName:"+formdata.fname+"\nEmail:"+formdata.email+"\nPassword:"+formdata.pass+"\nCity:"+formdata.city+"\nGender:"+formdata.gender+"\nMsg:"+formdata.msg)
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name='fname' onChange={handleform} required></input><br/><br/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' onChange={handleform} required></input><br/><br/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='pass' onChange={handleform} required></input><br/><br/>

                <label htmlFor="msg">Msg</label>
                <textarea id="msg" name='msg' onChange={handleform} required></textarea><br/><br/>

                <label htmlFor="city">City</label>
                <select id="city" name="city" onChange={handleform}>
                    <option value="">Select City</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Baroda">Baroda</option>
                </select><br/><br/>

                <label>Gender:</label>
                <input type="radio" id="male" name='gender' value='male' onChange={handleform} />
                <label htmlFor="male">Male</label><br/>
                <input type="radio" id="female" name='gender' value='female' onChange={handleform} />
                <label htmlFor="female">Female</label><br/><br/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
} 

export default Form1;