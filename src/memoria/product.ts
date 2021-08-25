let productList = [
    { id: 1, nombre: 'lapiz', precio: 200 },
    { id: 2, nombre: 'lapiz2', precio: 250 },
    { id: 3, nombre: 'lapiz3', precio: 260 },
];
let contador = 3

class Productos {
  find(id: number){
    return productList.find((aProduct) => aProduct.id === Number(id));
  }

  get(id?: number) {
    if (id) {
      return productList.filter((aProduct) => aProduct.id === id);
    }
    return productList;
  }

  add(data: any) {
    const newItem = {
      id: contador + 1,
      nombre: data.nombre,
      precio: data.precio,
    };

    productList.push(newItem);
    contador++

    return newItem;
  }

  update(id: number, data: any){

    productList.map((element)=>{

      if(element.id === Number(id)){
          element.nombre = data.nombre
          element.precio = Number(data.precio)
      }
  })
  }

  delete(id: number) {
    productList = productList.filter((aProduct) => aProduct.id !== id);
    return productList;
  }
}

  export const adminProducts = new Productos();