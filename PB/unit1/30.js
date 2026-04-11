// Write a JS to store an array of objects having height and name. 
// display name and height of person with highest height.
p1= [
        {
            'name' : 'Dhrumil',
            'height' : '153',
        },
        {
            'name' : 'mahek',
            'height' : '148',
        },
        {
            'name' : 'akshat',
            'height' : '160',
        },

]


var  ob1 = p1.sort((a,b)=>(b.height-a.height))
console.log("highest height : "+ob1[0].height)
