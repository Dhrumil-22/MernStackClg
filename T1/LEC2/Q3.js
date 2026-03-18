// write a json object which contain array of three objects. each object contain 2 properties a name and an age. now short an array vlaue by age in decending order. print name and age in terminal as per the sorted age  

student = [
    {
        name:'NAS',
        age:25
    },
    {
        name:'SAN',
        age:65
    },
    {
        name:'ASN',
        age:78
    },
]

// const a = student.sort((a,b)=>a.age-b.age);//acending
const a = student.sort((a,b)=>b.age-a.age);//acending
for(x of a){
    console.log(x.name+" "+x.age)
} 
