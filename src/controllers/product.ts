import {Request, Response} from 'express'
import { adminProducts, contador } from '../memoria/product'


class Product{
    constructor(){

    }
    // VER LA LISTA DE PRODUCTOS O UN ID PARTICULAR
    getProduct(req: Request, res: Response){
        //se obtiene el id por prams
        const {id} = req.query
        
        if(id){
            //busco si existe el product con ese id
            const product = adminProducts.find(Number(id))
            //si no existe le mando el error
            if(!product){
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                })
            }
            //si existe le mando el producto
            return res.json({
                data: product
            })
        }else{
            //si no manda ahi le mando 
            return res.json({
                data: adminProducts.get()
            })
        }
    }

    // AGREGAR UN PRODUCTO
    addProduct(req: Request, res: Response){
        //que nos pasen el nombre y precio por body
        const {nombre, precio} = req.body
        //por si no pasa precio nombre o no cumplen con sus tipos
        if(!precio || !nombre || typeof nombre !== 'string' || isNaN(precio)){
            res.status(400).json(
                {
                    msg: 'lee la docu pibe'
                }
            )
        }
        const newItem = {
            id: Number(contador + 1),
            nombre: nombre,
            precio: Number(precio)
        }

        const data = adminProducts.add(newItem)

        res.json({
            msg: 'Producto fue agregado',
            data: data
        })
    }

    updateProduct(req: Request, res: Response){
        const {id} = req.params
        const {nombre, precio} = req.body

        if(id){
            //busco si existe el product con ese id
            const product = adminProducts.find(Number(id))
            //si no existe le mando el error
            if(!product){
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                })
            }
            const data = {
                nombre: nombre,
                precio: precio
            }
            //si existe lo borro
            adminProducts.update(Number(id), data)
            
            return res.json({
                msg: 'El producto fue modificado con exito',
                data: adminProducts.get()
            })
        }else{
            //si no manda ahi le mando 
            return res.json({
                msg: 'ingrese el id que desea eliminar'
            })
        }
        
    }
    deleteProduct(req: Request, res: Response){

        const {id} = req.query
        
        if(id){
            //busco si existe el product con ese id
            const product = adminProducts.find(Number(id))
            //si no existe le mando el error
            if(!product){
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                })
            }
            //si existe lo borro
            adminProducts.delete(Number(id))
            return res.json({
                data: adminProducts.get()
            })
        }else{
            //si no manda ahi le mando 
            return res.json({
                msg: 'ingrese el id que desea eliminar'
            })
        }
    }
    
}

export const productController = new Product()