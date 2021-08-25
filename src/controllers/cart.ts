import {Request, Response} from 'express'

let cartItems = [
    {id: 1, nombre: 'lapiz', precio: 200},
    {id: 2, nombre: 'perro', precio: 300},
    {id: 3, nombre: 'parlante', precio: 400}
]


class Cart{

    // VER LA LISTA DE PRODUCTOS O UN ID PARTICULAR
    getItems(req: Request, res: Response){
        //se obtiene el id por prams
        const {id} = req.query
        
        if(id){
            //busco si existe el product con ese id
            const item = cartItems.find(oneProduct => oneProduct.id === Number(id))
            //si no existe le mando el error
            if(!item){
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                })
            }
            //si existe le mando el producto
            return res.json({
                data: item
            })
        }else{
            //si no manda ahi le mando 
            return res.json({
                data: cartItems
            })
        }
    }

    // AGREGAR UN PRODUCTO
    addProduct(req: Request, res: Response){
        //que nos pasen el nombre y precio por body
        const {id, nombre, precio} = req.body
        //por si no pasa precio nombre o no cumplen con sus tipos
        if(!precio || !nombre || !id || typeof nombre !== 'string' || isNaN(precio) || isNaN(id)){
            res.status(400).json(
                {
                    msg: 'lee la docu pibe'
                }
            )
        }
        const newItem = {
            id: Number(id),
            nombre: nombre,
            precio: Number(precio)
        }

        cartItems.push(newItem)

        res.json({
            msg: 'Producto fue agregado',
            data: newItem
        })
    }

    
    deleteProduct(req: Request, res: Response){

        const {id} = req.query
        
        if(id){
            //busco si existe el product con ese id
            const product = cartItems.find(oneProduct => oneProduct.id === Number(id))
            //si no existe le mando el error
            if(!product){
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                })
            }
            //si existe lo borro
            cartItems = cartItems.filter(oneProduct => oneProduct.id !== Number(id))
            return res.json({
                
                data: cartItems
            })
        }else{
            //si no manda ahi le mando 
            return res.json({
                msg: 'ingrese el id que desea eliminar'
            })
        }
    }
    
}

export const cartController = new Cart()