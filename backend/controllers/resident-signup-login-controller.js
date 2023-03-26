const HttpError = require('../models/http-error')

const ResidentLog = require('../models/residentlog')



const signup = async (req, res, next) => {
    const {
        name,
        socityname,
        phoneno,
        email,
        password
    } = req.body;
    let existingResidentLog;
    try {
        existingResidentLog = await ResidentLog.findOne({phoneno: phoneno})
    } catch (err) {
        const error = new HttpError('signup failed , try again', 500);
        return next(error);
    }
    if (existingResidentLog) {
        const error = new HttpError('phone number already registered', 422);
        return next(error);
    }

    const newResidentLog = new ResidentLog({
        name: name,
        socityname: socityname,
        phoneno: phoneno,
        email: email,
        password: password
    })
    
    try {
        await newResidentLog.save();;
    } catch (err) {
        const error = new HttpError('Signup  failed ', 500)
        return next(error)
    }

    res.status(201).json({Resident: newResidentLog});
};
const login = async (req, res, next) => {
    const {phoneno, password} = req.body;
    let identifiedResidentLog;
    try {
        identifiedResidentLog = await ResidentLog.findOne({phoneno , password})
    } catch (err) {
        const error = new HttpError('login failed , try again', 500);
        return next(error);
    }

    if (! identifiedResidentLog) {
        return next(new HttpError('Wrong credentials', 401));
    }
 

    res.json({Message: 'logged in'})

};


exports.login = login;
exports.signup = signup;
