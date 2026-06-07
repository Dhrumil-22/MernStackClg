import { useState,useEffect } from "react";
import axios from "axios";
function Axios2(){
    const[joke,setJoke] = useState("");
    function fetchJoke(){
            axios.get("https://official-joke-api.appspot.com/random_joke").then((res)=>{setJoke(res.data)}).catch((error)=>{console.error(error)})

    }
    useEffect(fetchJoke,[])
    return(
        <div>
            <h1 style={{fontSize:'40px'}}>{joke.setup}</h1>
            <h1 style={{fontSize:'40px'}}>{joke.punchline}</h1>
            <button onClick={fetchJoke}>Genrate Joke</button>
        </div>
    )
}
export default Axios2;



// ch 7 :
//  simglle component
// Map/filter,list/key
// react props 2 file
// events oncheng,onsubmit,and more 2
// react rounting 4 file aema 2 react propes nu kaam kare 1 and last 



// ch8:
// usestate ,usereducer ,usecontext(length) 4 -5 more files,useeffect,fomrs(usestates),axios

