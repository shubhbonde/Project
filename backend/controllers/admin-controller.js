const HttpError = require('../models/http-error')
const { validationResult } = require('express-validator')


let = DummyAdmin = [{
        name: 'gaja',
        socityname: 'lotus',
       phoneno: 626374682,
        email: 'gaja@gamil.com',
        password: 'gajabc'
    }]


const signup = (req, res, next) => { const error = validationResult(req) ;
    if(!error.isEmpty()){
        throw new HttpError('invalid input passed check your data',422)
    }

    const {
        name,
        socityname,
       phoneno,
        email,
        password
    } = req.body;
    const newAdmin = {
        name,
        socityname,
       phoneno,
        email,
        password
    }
    DummyAdmin.push(newAdmin);
    res.status(201).json({Admin:newAdmin});
};
const login = (req, res, next) => {
     const {mobileno,password} = req.body;

     const identifiedAdmin = DummyAdmin.find(a=>a.mobileno ==mobileno)

     if(!identifiedAdmin ||identifiedAdmin.password != password ){
        throw new HttpError('Wrong credentials ',401);         
     }
     res.json({Message :'logged in'})

};


exports.login = login;
exports.signup = signup;
