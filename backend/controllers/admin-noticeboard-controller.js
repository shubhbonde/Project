const HttpError = require('../models/http-error');
const {findById} = require('../models/Notice');


const Notice = require('../models/Notice')
const id = '640b142ea59976a496f4861d'
const newNotice = async (req, res, next) => {
    const {notice} = req.body
    let newNotice = new Notice({notice: notice})
    try {       
        newNotice  = await newNotice.save()
        console.log(newNotice)
   } catch (err) {
       const error = new HttpError('something went wrong ', 500)
       return next(error)
   }
    res.status(200).json(newNotice);
}

const getNotice = async (req, res, next) => {
     let noticeBoard
    try {
         noticeBoard = await Notice.find().limit(1).sort({$natural:-1}) ;
    } catch (err) {
        const error = new HttpError('something went wrong '+noticeBoard, 500)
        return next(error)
    }
   
    res.status(200).json(noticeBoard);
}

// const updateNotice = async (req, res, next) => {
//     const {newnotice} = req.body
//     let noticeBoard
//     try {
//          noticeBoard = await Notice.findOne({_id:id});
//         console.log(noticeBoard)
//     } catch (err) {
//         const error = new HttpError('something went wrong ', 500)
//         return next(error)
//     }
//     noticeBoard.notice = newnotice;
//     try {       
//         noticeBoard  = await noticeBoard.save()
//        console.log(noticeBoard)
//    } catch (err) {
//        const error = new HttpError('something went wrong ', 500)
//        return next(error)
//    }
//     res.status(200).json(noticeBoard);
// }

exports.getNotice = getNotice;
// exports.updateNotice = updateNotice;
exports.newNotice = newNotice;

