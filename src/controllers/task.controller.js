import Task from '../models/Tasks'
import {getPagination} from '../libs/getPagination'
/* 
offset: Cuantas pág quiero 
limit: Cantidad de documentos por pág
*/

export const findAllTasks = async (req,res) => {
try {
    const {size, page, title} = req.query

    const condition = title ? {
        title: { $regex: new RegExp(title), $options: "i"} //Consulta de expresión regular a mongodb, titulo que busque en el query buscarlo en los datos
    }: {};

    const {limit, offset} = getPagination(page, size)

    const data = await Task.paginate(condition, {offset, limit}) //Método 
    console.log(data);
    res.json({
        totalItems: data.totalDocs,
        tasks: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1
    })
} catch (error) {
    res.status(500).json({
        message: error.message || 'Something goes wrong retrieving the tasks'
    })
}
}

export const createTask = async (req,res) => {

    //Capa de validacion para comprobar si existe titulo - mejores (express validator - joi validation)
    if(!req.body.title){
        return res.status(400).send({mesage: 'Content cannot be empty'})
    }
try {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false //Operador ternario
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved)
} catch (error) {
    res.status(500).json({
        message: error.message || 'Something goes wrong creating the tasks'
    })
}
}

export const findOneTask = async (req,res) => {
    const { id } = req.params;
    try {
    const task = await Task.findById(id)
    
    if(!task) return res.status(404).json({message: `Task with id ${id} does not exists`})
    
    res.json(task)
    //throw new Error('my Error') Probar un error
    } catch (error) {
    res.status(500).json({
        message: error.message || `Error Retrieving Task with id: ${id}`
    })
}
}

export const deleteTask = async (req,res) => {
    const { id } = req.params;
try {
    await Task.findByIdAndDelete(id)

    res.json({
        message: 'Task were deleted successfully',
    });
} catch (error) {
    res.status(500).json({
        message: error.message || `Cannot delete task with id: ${id}`
    })  
}
}

export const findAllDoneTasks = async (req,res) =>{
    const tasks = await Task.find({done: true})
    res.json(tasks)
}

export const updateTask = async (req,res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: "Task was updated Successfully"})
}
