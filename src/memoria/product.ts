import { mySQLDB } from "../services/db";

class Productos {
  find(id: number){
    
  }

  get(id?: number) {
    
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