// crete a parant component names hsopital.jsx
// inside hospital.jsx create an object named patient containing paent name and doctor name
// pass patien object to child compo. oppointment.jsx using props
// in opp.jsx : display patioent name and doctor name,create a form with confirm appointement btn,use the onsubmit event.
// when form is subiteed prevent page relod and diplay alert msg ,"appiontment confmed for patient name"

import Appointment from './Appointment.jsx';
function Hospital(){
    const dp = {
        Pname:'XYZ',
        Dname:'PQR'
    }
    return(
        <>
        <Appointment dp={dp}></Appointment>
        </>
    )
}
export default Hospital;