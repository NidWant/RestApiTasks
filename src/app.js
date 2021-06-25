//Configuración de app
import express from 'express'
import morgan from 'morgan' //Ver peticiones que llegan
import cors from 'cors'//Cualquiera puede hacer peticiones
import TasksRoutes from './routes/tasks.routes'

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
//const corsOptions = {options: ''}; Objecto con la direccion que puede hacer la conexion
app.use(cors()); //(corsOptions)
app.use(morgan('dev'));
app.use(express.json());//Usar objetos json
app.use(express.urlencoded({extended: false}));//Reconocer formularios html

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application' })
})

app.use('/api/tasks', TasksRoutes)

export default app;