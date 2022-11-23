const manager = require('../maneger/maneger');

let webcam = async (req, res, next) => {
      console.log("reached controller");
      return manager.webcam(req)
            .then(data => {
                  let result = {
                        status: 200,
                        // data: data,
                        data: data,
                        // all: data.a,



                  }
                  return res.json(result);

            }).catch(next);
}


let getwebcam = async (req, res, next) => {
      return manager.getwebcam(req)
            .then(data => {
                  let result = {
                        status: 200,
                        DoctorInfo: data.DoctorInfo


                  }
                  return res.json(result);

            }).catch(next);
}






module.exports = { webcam, getwebcam }