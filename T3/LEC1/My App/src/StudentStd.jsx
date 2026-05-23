// create a react component that contain an array of student objects with id,name,std.
// perform the following task using filter and map .
// 1. display only student whose std is 5
// 2. increse there std by 1.
// 3. display student name and update the std.

function StudentStd(){
   const students = [
    {id:1,
        name:'abc',
        std :5
   },
 {id:2,
        name:'def',
        std :8
   },
    {id:3,
        name:'ghi',
        std :5
   },
    {id:4,
        name:'jkl',
        std :4
   },
    {id:5,
        name:'mno',
        std :5
   }
]
    return(
        <>
        {
            students.filter((value)=>value.std===5).map((value)=>{
              return<div>
                <h2>name : {value.name} </h2>
                <h2>std: {value.std+1}</h2>
              </div>
            })
        }
        </>
    )
}
export default StudentStd;


