var obj = JSON.parse('{"fruit":"apple"}', function(a,b) 
{if(b=="apple") return "orange";  else return b;})
console.log(obj)