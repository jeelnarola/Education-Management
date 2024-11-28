const {Router} = require('express')
const {UpdateTeacher, UploadAssignment} = require('../../controllers/Education/teacher.controller')

const TeacherRouter = Router()

TeacherRouter.patch('/update/couser/:id',UpdateTeacher)
TeacherRouter.post('/upload/assignment',UploadAssignment)

module.exports = TeacherRouter