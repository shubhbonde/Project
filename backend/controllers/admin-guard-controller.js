const HttpError = require('../models/http-error')
const { validationResult } = require('express-validator')

const Guard =  require('../models/guard')
const DUMMY = [{
        guardid: 101,
        name: "omkar",
        dutytime: 4
    },]
const getGuardById =  async (req, res, next) => {
    const guardid = req.params.guardid;
    let guard ;
     
    try {
        guard = await Guard.findOne({guardid:guardid})
    } catch (err) {
        const error = new HttpError('something went wrong ,could not find Guard', 500)
        return next(error)
    }

    if (! guard) {
        return next(new HttpError('Guard not found', 404))
    }
    res.json({guard});
};



const createGuard = async(req, res, next) => {
    const error = validationResult(req) ;
    if(!error.isEmpty()){
        throw new HttpError('invalid input passed check your data',422)
    }
    const {guardid, name, dutytime} = req.body;
    
    
    
    let newGuard = new Guard({guardid, name, dutytime});

    try {
        await newGuard.save();;
    } catch (err) {
        const error = new HttpError('creating Guard failed ', 500)
        return next(error)
    }


    res.status(200).json({newGuard: newGuard})
}


const updateGuard = async(req,res,next) =>{
    const error = validationResult(req) ;
    if(!error.isEmpty()){
        throw new HttpError('invalid input passed check your data',422)
    }
    const guardid = req.params.guardid
    const {name , dutytime} = req.body;
    let updateGuard ;
    try {
        updateGuard = await Guard.findOne({guardid:guardid})
    } catch (err) {
        const error = new HttpError('something went wrong , could not update Guard 1', 500)
        return next(error)
    }
    updateGuard.name = name ;
    updateGuard.dutytime = dutytime ;
    
    try {
        updateGuard = await updateGuard.save()
    } catch (err) {
        const error = new HttpError('something went wrong , could not update Guard 2', 500)
        return next(error)
    }


    res.status(200).json({message:'guard updated'})
}

const deleteGuard = async(req,res,next) =>{
     const guardid = req.params.guardid ;
     try {
        deleteRes = await Guard.findOneAndDelete({guardid: guardid});
    } catch (err) {
        const error = new HttpError('something went wrong , could not delete resident ', 500);
        return next(error);
    }

     res.status(200).json({message: 'guard deleted'})
}


exports.createGuard = createGuard
exports.getGuardById = getGuardById;
exports.updateGuard = updateGuard;
exports.deleteGuard = deleteGuard;