function Event1() {
    function handleChang(e) {
       console.log(e.target.value);
    }

    return (
        <input type="text" onChange={handleChang} />
    );
}
export default Event1;