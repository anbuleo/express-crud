import express from 'express'

import userController from '../controller/User.js'

const router = express.Router()

router.get('/users',userController.getAllUsers)
router.get('/users/:id',userController.getUserById)
router.post('/users',userController.create)
router.put('/users/:id',userController.editUser)
router.delete('/users/:id',userController.deleteUserById)


export default router