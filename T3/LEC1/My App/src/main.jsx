import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Myapp from './myapp.jsx'
// import StudentCard from './StudentCard.jsx'
// import MyProfile from './MyProfile.jsx'
// import Map from './Map.jsx'
// import Filter from './Filter.jsx'
// import StudentStd from './StudentStd.jsx'
// import List from './List.jsx'
// import Prop1 from './Prop1.jsx'
import Example1 from './Example1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Myapp/> */}
    {/* <StudentCard/> */}
    {/* <MyProfile/> */}
    {/* <Map/> */}
    {/* <Filter/> */}
    {/* <StudentStd/> */}
    {/* <List/> */}
    {/* <Prop1/> */}
    <Example1/>
  </StrictMode>,
)
