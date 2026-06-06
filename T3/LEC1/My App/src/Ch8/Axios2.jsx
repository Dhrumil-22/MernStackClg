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