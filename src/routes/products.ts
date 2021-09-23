import { Router, Request, Response } from "express";
import { productController } from "../controllers/product";
import { isAdmin } from "../middleware/admin";
import asyncHandler from 'express-async-handler';

const router = Router();

router.get('/', asyncHandler(productController.getProduct));

router.get('/:id', isAdmin, productController.checkProductExist, asyncHandler(productController.getProduct));

router.post('/', isAdmin, productController.checkAddProducts, productController.addProduct)

router.put('/:id', isAdmin, productController.checkProductExist,  productController.updateProduct)

router.delete('/', isAdmin, productController.checkProductExist, productController.deleteProduct)

export default router