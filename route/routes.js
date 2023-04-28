var express= require('express');

const studentController= require('../src/student/studentController')
const router=express.Router()

router.route('/student/registeration').post(studentController.createStudentControllerFn);
router.route('/student/login').post(studentController.loginStudentControllerFn);

module.exports = router;