const HttpError = require('../models/http-error')
const {validationResult} = require('express-validator')

const Admin = require('../models/admin')



const signup = async (req, res, next) => {
    const error = validationResult(req);
    const {
        name,
        socityname,
        phoneno,
        email,
        password
    } = req.body;
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({phoneno: phoneno})
    } catch (err) {
        const error = new HttpError('signup failed , try again', 500);
        return next(error);
    }
    if (existingAdmin) {
        const error = new HttpError('phone number already registered', 422);
        return next(error);
    }

    const newAdmin = new Admin({
        name: name,
        socityname: socityname,
        phoneno: phoneno,
        email: email,
        password: password
    })
    
    try {
        await newAdmin.save();;
    } catch (err) {
        const error = new HttpError('Signup  failed ', 500)
        return next(error)
    }

    res.status(201).json({Admin: newAdmin});
};
const login = async (req, res, next) => {
    const {phoneno, password} = req.body;
    
    let identifiedAdmin ;
    try {
        identifiedAdmin = await Admin.findOne({phoneno,password})
    } catch (err) {
        const error = new HttpError('login failed , try again', 500);
        return next(error);
    }

    if (!identifiedAdmin) {
        return next(new HttpError('Wrong creditial', 401));
    }
    else{
       return  res.send({
             code : 200,
             Message: "User Found",
            
             
        })
    }
    

    // res.json({Message: 'logged in'})

    return
};


exports.login = login;
exports.signup = signup;
