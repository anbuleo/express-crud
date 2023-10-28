import express from 'express'
import couponController from '../controller/Coupons.js'
const router = express.Router()

router.get('/coupons',couponController.getAllCoupons)
router.get('/coupons/:id',couponController.getCouponsById)
router.post('/coupons',couponController.createCoupons)
router.put('/coupons/:id',couponController.editCoupons)
router.delete('/coupons/:id',couponController.deleteCoupons)

export default router