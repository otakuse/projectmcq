const express = require('express');
const router = express.Router();
const RegistrationModel =  require('../models/registrations');
router.get('/students', (req, res) => {
    RegistrationModel.find({}, (err, result) =>{
      if(err){
          res.json(err);
      } else {
        console.log(result);
          res.json({data:result});
      }
    });
  });
router.post('/createStudent', (req, res) => {
    const student = new RegistrationModel({
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        enroll_no: req.body.enroll_no
    });
    student.save()
    .then((result) => {
        res.json({msg: 'Save Successfully', result})
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;