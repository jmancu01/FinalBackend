import {myServer} from './services/server';
import Config from './config';
import { mySQLDB } from './services/db'

const puerto = Config.PORT;

myServer.listen(puerto, () => console.log(`Server up puerto ${puerto}`));

//chequeo si existe una tabla
mySQLDB.schema.hasTable('productos').then((exists) =>{
    if(!exists){
        console.log('creando la tabla')
        //creo una tabla con estos 3 datos
        mySQLDB.schema
            .createTable('productos', (table) => {
                table.increments('id')
                table.string('name').notNullable();
                table.decimal('rating', 4, 2);
                table.string('city').notNullable();
                table.string('img').notNullable();
                table.string('type').notNullable();
                table.string('lenguaje').notNullable();
                table.string('food').notNullable();
        })
        .then(() => console.log('Tabla ya esta creada'))
    }
})
            
// type = {placeSelected.type}
// wifi = {placeSelected.wifi}
// lenguaje = {placeSelected.lenguaje}
// food = {placeSelected.food}
