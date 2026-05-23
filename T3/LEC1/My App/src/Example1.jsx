//1.create a parent component example1.jsx.
//2.create an object name "details" containing student name and university name.
//3.paseed the details object to child component example.jsx.
//4.in child component receive the object using props and display "I am abc...studing in lj university"

import Example from './Example';
function Example1(){
    const Details={
        student_name:'abc',
        uni_name:'LJ university'
    }
    return(
        <>
        <Example details={Details}/>
        </>
    )
}
export default Example1;