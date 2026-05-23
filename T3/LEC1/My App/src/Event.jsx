//write react.jsx script to display alert box with text welcom to lj university by clicking one button 
function Event() {
    function handleClick() {
        alert("Welcome to LJ University");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}
export default Event;