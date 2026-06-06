import { useEffect, useState } from "react";
function UE2(){
    const [date,setDate] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[])
    return(
        <div>
            <h1>Time using localeString: {date.toLocaleTimeString()}</h1><br/>
            <h1>Hour-{date.getHours()} Min-{date.getMinutes()} Sec-{date.getSeconds()}</h1>

        </div>
    )
}
export default UE2;