const HttpError = require('../models/http-error')

const GuardLog = require('../models/guardlog')



const signup = async (req, res, next) => {
    const {
        name,
        socityname,
        phoneno,
        email,
        password
    } = req.body;
    let existingGuardLog;
    try {
        existingGuardLog = await GuardLog.findOne({phoneno: phoneno})
    } catch (err) {
        const error = new HttpError('signup failed , try again', 500);
        return next(error);
    }
    if (existingGuardLog) {
        const error = new HttpError('phone number already registered', 422);
        return next(error);
    }

    const newGuardLog = new GuardLog({
        name: name,
        socityname: socityname,
        phoneno: phoneno,
        email: email,
        password: password
    })
    
    try {
        await newGuardLog.save();;
    } catch (err) {
        const error = new HttpError('Signup  failed ', 500)
        return next(error)
    }

    res.status(201).json({Admin: newGuardLog});
};
const login = async (req, res, next) => {
    const {phoneno, password} = req.body;
    let identifiedGuardLog ;
    try {
        identifiedGuardLog =  await GuardLog.findOne({phoneno,password});
    } catch (err) {
        const error = new HttpError('login failed , try again', 500);
        return next(error);
    }

    if (!identifiedGuardLog) {
        return next(new HttpError('Wrong credentials ', 401));
    }

    res.json({Message: 'logged in'})

};


exports.login = login;
exports.signup = signup;
