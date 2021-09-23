import {myServer} from './services/server';
import Config from './config';

const puerto = Config.PORT;

myServer.listen(puerto, () => console.log(`Server up puerto ${puerto}`));