import {Request, Response} from 'express'

class Product{
    constructor(){

    }

    getAllProduct(req: Request, res: Response){

        res.json({
            msg: 'bancame perro'
        })
    }
    getThisProduct(req: Request, res: Response){

        res.json({
            msg: 'bancame perro ahi te mande uno'
        })
    }
    updateProduct(req: Request, res: Response){
        
        res.json({
            msg: 'bancame perro ahi te mande uno'
        })
    }
    deleteProduct(req: Request, res: Response){
        
        res.json({
            msg: 'bancame perro ahi te mande uno'
        })
    }
    addProduct(req: Request, res: Response){
        
        res.json({
            msg: 'bancame perro ahi te mande uno'
        })
    }
}

export const productController = new Product()