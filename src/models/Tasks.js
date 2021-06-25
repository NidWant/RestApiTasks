import { Schema,model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true //Usar la funciòn trim de Js (Remover espacios)
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false, //Evita __v
    timestamps: true //Idica fecha de creaciòn y de actualizaciòn
});

taskSchema.plugin(mongoosePaginate); //Añadir la paginación
export default model('Task',taskSchema)