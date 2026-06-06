import { useEffect, useState } from "react";
function UE1(){
    const [count,setCount] = useState(0);
    const [calcualtion,setCale] = useState(0);
    useEffect(()=>{
        alert("Clicked")},[count])
    useEffect(()=>{
        alert("Clicked")},[])
    useEffect(()=>{
        alert("Clicked")})

        function chnageCount(){
            setCount(count+1)
            
        }
        function chnageCale(){
            setCale(calcualtion+1)
        }
        return(
            <div>
        <button onClick={chnageCount}>ButtonA {count}</button><br/>
        <button onClick={chnageCale}>ButtonB {calcualtion}</button>
    </div>
)
}
export default UE1;
