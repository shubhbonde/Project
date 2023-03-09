const HttpError = require('../models/http-error')
const { validationResult } = require('express-validator')


const DUMMY = [{
        guardid: 101,
        name: "omkar",
        dutytime: 4
    },]
const getGuardById = (req, res, next) => {
    const guardId = req.params.guardid;
    const guard = DUMMY.find(g => {
        return g.guardid == guardId;
    })

    if (! guard) {
        return next(new HttpError('Guard not found', 404))
    }
    res.json({guard});
}

const createGuard = (req, res, next) => {
    const error = validationResult(req) ;
    if(!error.isEmpty()){
        throw new HttpError('invalid input passed check your data',422)
    }
    const {guardid, name, dutytime} = req.body;
    const newGuard = {
        guardid,
        name,
        dutytime
    };
    DUMMY.push(newGuard);
    res.status(200).json({newGuard: newGuard})
}


const updateGuard = (req,res,next) =>{
    const error = validationResult(req) ;
    if(!error.isEmpty()){
        throw new HttpError('invalid input passed check your data',422)
    }
    const {name , dutytime} = req.body;
    const updateGuard =   {...DUMMY.find(g =>g.guardid==guardid)};
    const index = DUMMY.findIndex(g =>g.guardid==guardid);
    updateGuard.name = name ;
    updateGuard.dutytime = dutytime ;
    DUMMY[index] = updateGuard ;
    res.status(200).json({message:'guard updated'})
}

const deleteGuard = (req,res,next) =>{
     const guardid = req.params.guardid ;
     if(!DUMMY.find(g=>g.guardid!=guardid)){
        throw new HttpError('could not find guard for this id',404)
    }
     DUMMY =DUMMY.filter(g=>g.guardid!=guardid);
     res.status(200).json({message: 'guard deleted'})
}


exports.createGuard = createGuard
exports.getGuardById = getGuardById;
exports.updateGuard = updateGuard;
exports.deleteGuard = deleteGuard;