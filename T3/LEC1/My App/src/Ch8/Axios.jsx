import { useState,useEffect } from "react";
import axios from "axios";
function Axios(){
    const[myimg,setImg] = useState("");
    useEffect(()=>{
        setInterval(()=>{
            axios.get("https://dog.ceo/api/breeds/image/random").then((res)=>{
                setImg(res.data)
            }
            )
            .catch((error)=>{console.error(error)})
        },2000)
    },[])
    return(
        <img src={myimg.message} height={300} width={300} />
    )
}
export default Axios;