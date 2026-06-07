// pat nam no object pat:doc namechid ma display karva niche form khulvu joiae aema khali submit button and aemu name cnf buton click karo arlte aleret aave 
function Appointment(props){
    function booking(e){
        e.preventDefault();
        alert(`App. booked for ${props.dp.Pname}`);
    }
    return(
        <>
        <h1>{props.dp.Pname}</h1>
        <h1>{props.dp.Dname}</h1>
        <form>
            <button type="button" onClick={booking}>Confirm</button>
        </form>
        </>
    )
}
export default Appointment;