const HttpError = require('../models/http-error');
const {validationResult} = require('express-validator')

const Resident = require('../models/Resident')

let DUMMY = [{
        flatno: 101,
        name: "sayali",
        fammembers: 4,
        phone: 76394832
    },]

const getResidentByFlatNo = async (req, res, next) => {
    const flatnum = req.params.flatno;
    let resident;
    try {
        resident = await Resident.findOne({flatno: flatnum})
    } catch (err) {
        const error = new HttpError('something went wrong ,could not find a resident', 500)
        return next(error)
    }

    if (! resident) {
        throw new HttpError('could not find a resident', 404);
    }
    res.json({resident});
};
const createResident = async (req, res, next) => {
    const error = validationResult(req);
    if (! error.isEmpty()) {
        throw new HttpError('invalid input passed check your data', 422)
    }
    const {flatno, name, fammembers, phone} = req.body;

    const newResident = new Resident({flatno, name, fammembers, phone});

    try {
        await newResident.save();;
    } catch (err) {
        const error = new HttpError('creating resident failed ', 500)
        return next(error)
    }
    res.status(200).json({newResident})
}

const updateResident = async (req, res, next) => {
    const error = validationResult(req);
    if (! error.isEmpty()) {
        throw new HttpError('invalid input passed check your data', 422)
    }

    const {name, fammembers, phone} = req.body;

    const flatno = req.params.flatno;
    let updateResident;

    try {
        updateResident = await Resident.findOne({flatno: flatno})
    } catch (err) {
        const error = new HttpError('something went wrong , could not update resident', 500)
        return next(error)
    }
    updateResident.name = name;
    updateResident.fammembers = fammembers;
    updateResident.phone = phone;

    try {
        updateResident = await updateResident.save()
    } catch (err) {
        const error = new HttpError('something went wrong , could not update resident', 500)
        return next(error)
    }

    res.status(200).json({updateResident})
}

const deleteResident = async (req, res, next) => {
    const flatno = req.params.flatno;
    let  deleteRes ;
    
    try {
        deleteRes = await Resident.findOneAndDelete({flatno: flatno});
    } catch (err) {
        const error = new HttpError('something went wrong , could not delete resident ', 500);
        return next(error);
    }
    console.log({deleteRes})


    
    res.status(200).json({message:'resident deleted'});
}

exports.createResident = createResident;
exports.getResidentByFlatNo = getResidentByFlatNo;
exports.updateResident = updateResident;
exports.deleteResident = deleteResident;
