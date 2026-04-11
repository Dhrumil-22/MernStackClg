react ma components bane so ex like insta ma like kro toh ae aakhu page reload nai kare component reload karse
react dynamic ui che ae khali aena component jode communication kare

exprees is frmawork with handle the api routing get and post and handles the req. and respone
node is runtime enviroment server is allow the js file on server side node is intermidiate.

t1 = 1 2 3(node)
t2 = 4 5 6(express)
t3 = 7 8(react)
t4 = 9 10(mongo)

JSon = JavaScript Object Notation
{
    'name' : 'FSD',
    'lec' : [1,2]
}

datatype = 

* accped as value
1.nested object 
{
    'company' : "XYZ";
    'address' : {
                'block' : 24,
                'email' : 'xyz@gmail.com'
                }   
}
2. number 
3. object
4. array
5. bollen
6. null

* not accped as value
1.date 
2.funciion
3.undefined

node package manager (npm -v)


to get data from json file 

            const data = require('./f1.json');
            console.log(data)

## JSon built in funciions : 
1. JSon.parse():
>> JSOn str to js object
>> used when data wants to receive from server

2. JSon.stringyfy():
>> JS object to json str
>> used  when data eant to send to server


NODE USES 
1. ASYNCRONUS PROGRAMMING [NON-BLOCKING] [parallel badha kare je pela puru thay aene respond kari de ]
2. SYNCRONUS PROGRAMMING [BLOCKING] [one by one [pela 1st karse ]]
3. CALLBACK FUNCION 
    3.1 SetTimeout() 
    3.2 SetInterval()
    3.3 clearInterval()


** ndoe use the ASYNCRONUS PROGRAMMING ...
** beacuse of fask execution 
** when we talking about ASYNCRONUS PROGRAMMING we use CALLBACK funciion 
1. main funciotn ni ander as argument run thay aene CALLBACK kevay
callback ae aapde call nathi karta ae task pati jaay tayre aeni jaay thay che
callback ni jarur aetle padi kem ke aapde ASYNCRONUS o use kariae chiae.. 

1.1 SetTimeout thi ketlo time wait karvau che aena mate use thay ..
1.2 SetInterval ae atni ander particuler time ma funcion repetative call thse..
1.3 clearInterval ae interval ne stop karv mate



enviroment varibale 
value stores outside the program
npm install dotenv
pm conig set proxy http://:192.168.10.251:808


## FS MODULE
    ==> FS MODULE NODE JS NO PART CHE AE HELP KARE CHE FILE SYSTEM JODE WORK KARVA MATE 
    ==> AEMA DIRECTORY CREATE KARVI -> FILE CREATE KARVI -> READ KARVI -> UPDATE KARVI -> DELATE KARVI -> RENAME KARVI  -> DIRECTORY DELETE KARVI -> ETC 




  ch 3 ma url http
  ch 1 json object stingyfy and parse   sorting 