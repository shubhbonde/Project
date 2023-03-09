

let noticeBoard = {notice:"National People's Party (NPP) leader Conrad Sangma sworn in as chief minister of Meghalaya for second term. Later today, Nationalist Democratic Progressive Party (NDPP)'s Neiphiu Rio will take oath as Nagaland chief minister."}


const getNotice = (req, res, next) => {
    const Notice = noticeBoard
    res.status(200).json(Notice);
}

const updateNotice = (req,res,next) =>{
      const {notice} = req.body
      noticeBoard = notice ;
      res.status(200).json(notice);
}

exports.getNotice = getNotice ;