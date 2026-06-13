// LEC2
function Filter(){
   const arr=[1,6,9,5,4,3,7,9]
    return(
        <>
        {
            arr.filter((value)=>value>=6).map((value)=>{
                return<h2>updated array={value}</h2>
            })
        }
        </>
    )
}
export default Filter;

