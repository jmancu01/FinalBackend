import { Router } from "express";
import productRouter from './products'
import cartRouter from './cart'
import cors from 'cors'

const router = Router()

router.use('/products',cors(), productRouter)

router.use('/cart', cartRouter)

export default router