// Write a JSON object which contains array of 3 objects. Each object 
// contains 2 properties name and age. Now, sort an array values by age 
// in descending order. Print name in terminal as per the sorted age.

person = [
    {
        'name':'Dhrumil',
        'age':20,
    },
    {
        'name':'mahek',
        'age':19,
    },
    {
        'name':'akshat',
        'age':21,
    },
]

var obj = person.sort((a,b)=>b.age-a.age)
for(x of obj){
    console.log('name: '+x.name+' age : '+x.age)
}
