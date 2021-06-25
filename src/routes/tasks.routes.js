import {Router} from 'express'

import * as taskCtrl from '../controllers/task.controller' //Importa todas las funciones

const router = Router()

router.post('/', taskCtrl.createTask)

router.get('/', taskCtrl.findAllTasks)

router.get('/done', taskCtrl.findAllDoneTasks) //Sigue el orden de las rutas colocadas

router.get('/:id', taskCtrl.findOneTask)

router.delete('/:id', taskCtrl.deleteTask)

router.put('/:id', taskCtrl.updateTask)

//Documetar apidocs

export default router;