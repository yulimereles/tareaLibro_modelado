import { model, Schema } from 'mongoose';

const autor = new Schema({
   nombre: {
    type: String,
    required: true,
   },
    apellido: {
    type: String,
    required: true,
},
    biografia: {
        type: String,
        required: true,
    },
    

}, {
    timestamps: true,
    versionKey: false,
}
);

const AutorModel = model('Autor', autor);
export { AutorModel}