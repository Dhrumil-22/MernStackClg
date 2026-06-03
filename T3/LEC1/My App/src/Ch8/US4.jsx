// WRITE A PROGRAM TO BUILD THE REACT APP HAVING A BUTTON WHCIH CHNAGES IMAGE BY CLICK IT
import { useState } from "react";
import img1 from "C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T3/LEC1/My App/src/Ch8/hero.png"
import img2 from "C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T3/LEC1/My App/src/Ch8/react.svg"


function US4(){
    const[img,setimage]=useState(img1);
    function chanegImg(){
        if (img === img1){
            setimage(img2)
        }
        else{
            setimage(img1)
        }
        
    }
    return(
        <div>
            <img src={img} style={{height:'300px', width:'300px', border: '2px solid lightblue'}}></img><br></br>
            <button onClick={chanegImg}>Hit to change</button>
        </div>
    )
}
export default US4;

