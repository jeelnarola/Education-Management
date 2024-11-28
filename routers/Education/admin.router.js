const {Router} = require('express')
const {CreateCourse, UpdateCourse, DeleteCourse} = require('../../controllers/Education/admin.controller')

const AdminRouter = Router()

AdminRouter.post('/create/course',CreateCourse)
AdminRouter.patch('/update/course/:id',UpdateCourse)
AdminRouter.delete('/delete/course/:id',DeleteCourse)

module.exports = AdminRouter