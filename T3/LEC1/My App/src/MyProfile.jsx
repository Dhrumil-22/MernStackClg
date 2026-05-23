// LEC2
// create a react component named my profile in a react vite project.
// the component should create a simple ui containing heading,by passing js expression(inline css),paragraph,list of skills, one image from assets folder and one button.
// used external css anywhere 

import './MyProfile.css'
import img1 from './assets/hero.png'

function MyProfile(){
    const name = 'react'
    return(
        <>
        <h1 style={{color:"green",fontStyle:"italic"}}>Welcome to {name}</h1>
        <p className='box'>hello</p>
        <img src={img1} alt='logo'/>
        <ol>
            <li>1</li>
            <li>2</li>
        </ol>
        <button>click me</button>
        </>
    )
}

export default MyProfile;