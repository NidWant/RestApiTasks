import {config} from 'dotenv'; //Importar método de dotenv - config
config(); //Llamar archivo va a cargar variable en el sistema

//Leyendo variable y exportandola más fácil
export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tasksdb',
};