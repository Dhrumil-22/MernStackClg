// LEC2

// write react code to rander a component to display all array elements in h2 tag using map function

function Map() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div>
            <h1>Map</h1>
            {
                arr.map((value) => {
                        return (<h2>Array Elements={value}</h2>)}
                )
            }
        </div>
    )
}
export default Map;