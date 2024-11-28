const {Router} = require('express')
const CreateCourse = require('../../controllers/Education/admin.controller')

const AdminRouter = Router()

AdminRouter.post('/create/course',CreateCourse)

module.exports = AdminRouter