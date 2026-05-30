// add a text feild and a submit button. while changing the value in text feild display it below the form. display this text feild value in an alert box upon submiting it.
// add a button to perform click and double click event task. on click event, display message u clicked onced in h3 tag and on doble click dispay message u clicked twice in h3 tag.
// message should be display below the button

function Event3() {
    function handleChange(e) {
        document.getElementById("test").innerText = e.target.value;
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert(document.getElementById("uname").value);
    }
    function handleClick() {
        document.getElementById("test1").innerText = "You clicked one";
    }
    function handleDoubleClick() {
        document.getElementById("test1").innerText = "You clicked twice";
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" id="uname" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        <h3 id="test">on change</h3>
        <button onClick={handleClick} onDoubleClick={handleDoubleClick}>Click Me</button>
        <h3 id="test1">on double click</h3>
    </div>
);
}
export default Event3;
