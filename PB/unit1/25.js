// Write a JSON script by entering user detail of three different person 
// having same age group in string format method. Print the following 
// result in object form. (1) User Details (2) Name of 2nd person and 
// his/her age.

var p =  {
'p':[
        { 
            'name' : 'Dhrumil',
            'age':'20',
        },
        {
            'name' : 'Mahek',
            'age':'20',
        },
        {
            'name' : 'DhrumilMahek',
            'age':'20',
        },
    ]
}

console.log(p.p[0])
console.log(p.p[1])
console.log(p.p[2])
console.log("name : "+p.p[1].name+"\n"+"age : "+p.p[1].age)