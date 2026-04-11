// Write a function 'FirstAndLast' that takes in an array, and returns an 
// object with:
// 1) the first element of the array as the object's key, and
// 2) the last element of the array as that key's value. 
// (Example input: ['ABC', 'DEF', 'Employee', 'Manager'] 
// output: ABC : 'Manager')


function FirstAndLast(a)
{   
        var d1 = {}
        d1[a[0]] = a[a.length-1];
        console.log(d1);
};

a1 = ['ABC', 'DEF', 'Employee', 'Manager']
FirstAndLast(a1);    