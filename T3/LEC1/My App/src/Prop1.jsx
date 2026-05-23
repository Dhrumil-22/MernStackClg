//1.create parent component prop1.jsx 
//2.passed the following data to child component prop2.jsx using props,student name,roll no,marks.
//3. in child component display student detail and increase marks by 1 and display updated marks

import Prop2 from './Prop2';
function Prop1(){
    var n="abc";
    return(
        <>
        <Prop2 name={n} roll="101" marks={30}>;</Prop2>
        <Prop2 name="pqr" roll="102" marks={40}>;</Prop2>
        <Prop2 name="xyz" roll="103" marks="50">;</Prop2>
        </>
    )
}
export default Prop1;