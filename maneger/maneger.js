
const Wevcam = require('../models/webcam')
let webcam = async (req) => {

      console.log("manager reached");

      let newuser = {


            name: req.body.name,
            // email: req.body.email,
            image: req.body.Image,

      }
      let a = await Wevcam.create(newuser);

      console.log(a)




      // let a = await Doctor.create(newuser);
      // // let admin1 = a.AdminName;
      // console.log(a)
      // let authtoken = { token: Math.random(10), hospitalId: a.id, adminType: a.adminType }

      // let b = await HospitalAuth.create(authtoken);
      // console.log(b.token)
      // return { a: a.adminEmail, b: b.token, authtoken: authtoken.adminType, id: b.hospitalId }

}


let getwebcam = async (req) => {
      console.log("login function reached");

      // let findData = { id: id }
      // console.log(findData);
      let DoctorInfo = await Wevcam.findAll({ order: [["id", "DESC"]], attributes: ["name", "id", 'image'], raw: true, });

      // let countryList = await Country.findAll({
      //       raw: true,
      //       limit,
      //       offset,
      //       order: [["id", "DESC"]],
      //       attributes: ["name", "id"],
      //     });
      //     console.log(countryList);
      //     return { countryList };
      console.log(DoctorInfo);
      // console.log(DoctorInfo);
      return { DoctorInfo: DoctorInfo }
      // } else {
      //     throw new BadRequestError(`Sorry ,only mainDoctor can access this`)
      // }
}

module.exports = { webcam, getwebcam };