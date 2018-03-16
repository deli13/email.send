var express = require('express');
var router = express.Router();
var mailer = require('nodemailer');
/* POST mailer page. */

var smtpTransport=mailer.createTransport({
    host:"smtp.yandex.ru",
    port:465,
    secure:true,
    auth:{
        user:"",
        pass:""
    }
});
router.post('/', function (req, res, next) {
    console.log(req);
    var options={
        from:"",
        to:req.body.to,
        subject:"Тестовое письмо",
        html:req.body.content
    };
    smtpTransport.sendMail(options,function (error,response) {
        if(error){
            console.log(error);
        } else {
            console.log("Mail send ");
	    console.log(response);
        }
    })

    res.redirect('/');
});


module.exports = router;
