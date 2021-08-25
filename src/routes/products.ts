import { Router, Request, Response } from "express";
import { productController } from "../controllers/product";

const router = Router();

router.get('/', productController.getAllProduct)

router.post('/', productController.addProduct)

router.put('/',  productController.updateProduct)

router.delete('/', productController.deleteProduct)

export default router