//  addd three button change text, change color, hide or show .
// add heading  LJU in red color also add react JS in h2 tag. 
//  by cliking on change text button text should be change to 'LJU'<-->'welcome student' ad vice versa .
//  by click on chnage color button color should be change to blue .
// initailly button ext should be hide while clicknig on it button text should chnage to show and react js will not be shown ..

import { useState } from "react";
function US2(){
    const[name,setName]=useState('LJU');
    const[color,setColor]=useState('red');
    const[hidetext,setHide]=useState('Reaact JS');
    const[buttontext,setButtontext]=useState('Hide');
    const[text,setText]=useState('cursive');
    // const[fontsize,setSize]=useState('16');
    function showhide(){
        if(buttontext==='Hide'){
            setButtontext('show')
            setHide('')
        }
        else{
            setButtontext('Hide')
            setHide('React JS')
        }
    }
    function fontChange(){
        if(text==='cursive'){
            setText('Times new roman')
        }
        else{
           setText('cursive')
        }
    }
    function changeName(){
        if(name==='LJU'){
            setName('Welcome Students')
            
        }
        else{
            setName('LJU')

        }
    }
    function changeColor(){
        if(color==='red'){
            setColor('blue') 
        }
        else{
            setColor('red')
        }
    }
    return(
        <div>
            <h1 style={{color:color,fontFamily:text}}>{name}</h1>
            <h1>{hidetext}</h1>
            <button onClick={changeName}>Text!</button><br></br>
            <button onClick={changeColor}>Change color!</button><br></br>
            <button onClick={showhide}>{buttontext}</button><br></br>
            <button onClick={fontChange}>Font Change</button><br></br>
        </div>
    )
}
export default US2;

