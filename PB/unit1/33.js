// Write one JSON string with date property (yyyy-mm-dd) and print 
// date in India standard time. 

var obj = {
    'name':'Dhrumil',
    'DOB':'2006-12-22'
}

var a = new Date(obj.DOB)
console.log(a)