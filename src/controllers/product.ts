<<<<<<< HEAD
import { Request, Response, NextFunction } from 'express'
import { adminProducts, contador } from '../memoria/product'

=======
import {Request, Response} from 'express'
import { adminProducts } from '../memoria/product'
import { mySQLDB} from '../services/db'
>>>>>>> e0fc7a329a7f41658ca7acfc15f5c163e496b993

class Product{
    constructor(){

    }
    // VER LA LISTA DE PRODUCTOS O UN ID PARTICULAR
    async getProduct(req: Request, res: Response){
        //se obtiene el id por prams
        const {id} = req.query
        
        if(id){
            //busco si existe el product con ese id
            const product = await mySQLDB.from('productos').where({ id: id }).select();
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
            const data = await mySQLDB.from('productos').select();
            //si no manda ahi le mando 
            return res.json({
                data: data
            })
        }
    }

    async checkProductExist(req: Request, res: Response, next: NextFunction){
        //que nos pasen el nombre y precio por body
        const id = req.params.id;
        const producto = await adminProducts.find(id);

        if (!producto) {
            return res.status(404).json({
                msg: 'producto not found',
            });
        }
        next();
    }

    async checkAddProducts(req: Request, res: Response, next: NextFunction) {
    const { nombre, precio } = req.body;

    if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)) {
      return res.status(400).json({
        msg: 'Campos del body invalidos',
      });
    }

    next();
  }

    // AGREGAR UN PRODUCTO
    async addProduct(req: Request, res: Response){
        //que nos pasen el nombre y precio por body
        const {name, rating, city, img, type, lenguaje, food} = req.body
        //por si no pasa precio nombre o no cumplen con sus tipos
        if(!name || typeof name !== 'string'){
            res.status(400).json(
                {
                    msg: 'lee la docu pibe'
                }
            )
        }
        const newItem = {
            name: name,
            rating: rating,
            city: city,
            img: img,
            type: type,
            lenguaje: lenguaje,
            food: food
        };

        const data = await adminProducts.add(newItem)

        res.json({
            msg: 'Producto fue agregado',
            data: data
        })
    }

    async updateProduct(req: Request, res: Response){
        const {id} = req.params
        const {nombre, rating, city, img, type, lenguaje, food} = req.body

        if(id){
            //busco si existe el product con ese id
            const product = await mySQLDB.from('productos').select();

            //si no existe le mando el error
            if(!product){
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                })
            }
            const newItem = {
                name: nombre,
                rating: rating,
                city: city,
                img: img,
                type: type,
                lenguaje: lenguaje,
                food: food
            };

            //si existe lo borro
            const update = await adminProducts.update(Number(id), newItem)
            const newList = await mySQLDB.from('productos').select();

            return res.json({
                msg: 'El producto fue modificado con exito',
                data: newList,
                update: update
            })
        }else{
            //si no manda ahi le mando 
            return res.json({
                msg: 'ingrese el id que desea eliminar'
            })
        }
        
    }
    async deleteProduct(req: Request, res: Response){

        const {id} = req.query
        
        if(id){
            //busco si existe el product con ese id
            const product = await mySQLDB.from('productos').select();
            //si no existe le mando el error
            if(!product){
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                })
            }
            //si existe lo borro
            const data = await adminProducts.delete(Number(id))
            return res.json({
                data: data
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