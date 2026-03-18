// write a fucntion named "firstlast" that takes an array and return an object with below condition 
// 1. the first element of an array must be an objects e .
// 2.the last elemnt of an array must be a key-value.

function firstlast(a)
{
    var temp = {}
    temp[a[0]] = a[a.length-1];
    return temp;
}
data  = ['abc','def','ghi','jkl']
console.log(firstlast(data))
