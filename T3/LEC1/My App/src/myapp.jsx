// import "./myapp.css";
// import img1 from ".assets/hero.png";

// function Myapp(){
//     return(
//         <div>
//             <h1 style = {{ color:"pink",fontFamily:"cursive",fontSize:"50px",fontWeight:"bold",border:"2px solid white", height:"50px"}}>Hello</h1>
//             <p>This is My App</p>
//         </div>
//     )
// }
// export default Myapp;



// function Myapp() {
//   return (
//     <div>
//       <h1>My First React App</h1>
//       <p>This is a simple React application.</p>
//     </div>
//   );
// }
// export default Myapp;

import "./Myapp.css";
import img1 from "C:\\Users\\91940\\Downloads\\@ COLLAGE\\LJIET\\SEM4\\FSD2\\T3\\LEC1\\My App\\src\\assets\\hero.png";

function Myapp() {
    const name = "John Doe";
    return (
        <>
        {/*inline styling*/}
        <h1 style={{ color: "blue", textAlign: "center" }}>Welcome to My React App</h1>
        Welcome to My React App, {name}!
        <p className="para">
        This is a simple React application that demonstrates the use of components, props, and state. React is a popular JavaScript library for building user interfaces, and it allows developers to create reusable UI components. In this app, we have a functional component called Myapp that renders a heading and a paragraph. We also import an image and apply some CSS styling to make the app visually appealing. React makes it easy to build interactive and dynamic web applications, and it's widely used in the industry for creating modern web applications.
        </p>
        <ol type="A">
            <li>HTML</li>
            <li>CSS</li>
        </ol>
        <img src={img1} alt="logo" width="200"/>
        </>
    )
}
export default Myapp;