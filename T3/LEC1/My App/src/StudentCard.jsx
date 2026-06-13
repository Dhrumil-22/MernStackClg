// LEC2

// create a react component named student card in a react vite project .
// the component should dispplay the followint details :
// 1.student name ,enrollment no. , course by passing js expression .



function StudentCard(){
    const name='ABC';
    const enrollment='1234';
    const course='FSD';
    return(
        <div>
            <h1>Name:{name}</h1>
            <p>Enrollment: {enrollment}</p>
            <p>Course: {course}</p>
        </div>
    )
}
export default StudentCard;