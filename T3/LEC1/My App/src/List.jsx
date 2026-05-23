function List(){
    const student=[
        {id:1,name:"Alice"},
        {id:2,name:"Bob"},
        {id:3,name:"Charlie"},
        {id:4,name:"David"}
    ]
    return(
        <ul>
        {
            student.map((student)=>{
                return<li key={student.id}>{student.name}</li>
            })
        }
        </ul>
    )
}
export default List;