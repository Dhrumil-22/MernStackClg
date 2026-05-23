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

// create a react component named my profile in a react vite project.
// the component should create a simple ui containing heading,by passing js expression(inline css),paragraph,list of skills, one image from assets folder and one button.
// used external css anywhere 