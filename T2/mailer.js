var nm = require('nodemailer');
var trans = nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"dhrumilvaghela22@gmail.com",
        pass:'wcsv sqkk tgyd rfqq'
    }
});

var mailoption = {
    from:"dhrumilvaghela22@gmail.com",
    to:"yashpandya2223@gmail.com",
    subject:"hello",
    text:"hiee",
    html :"Test Main"
}

trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err)
    }
})