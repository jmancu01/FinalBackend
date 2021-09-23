import { mySQLDB } from "../services/db";

class Productos {
<<<<<<< HEAD
  find(id: any){
    return productList.find((aProduct) => aProduct.id === (id));
  }

  get(id?: any) {
    if (id) {
      return productList.filter((aProduct) => aProduct.id === id);
    }
    return productList;
=======
  find(id: number){
    
  }

  get(id?: number) {
    
>>>>>>> e0fc7a329a7f41658ca7acfc15f5c163e496b993
  }

  add(data: any) {
    const newItem = {
      name: data.nombre,
      rating: data.rating,
      city: data.city,
      img: data.img,
      type: data.type,
      lenguaje: data.lenguaje,
      food: data.food
    };

    return mySQLDB('productos').insert(newItem);
  }

  update(id: number, data: any){
    return mySQLDB.from('productos').where({ id }).update(data);  
  }

  delete(id: number) {
    return mySQLDB.from('productos').where({ id }).del();
  }
}

export const adminProducts = new Productos();