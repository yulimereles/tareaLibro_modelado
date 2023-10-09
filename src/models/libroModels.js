import { model, Schema } from "mongoose";

const libro = new Schema({
    titulo: {
        type : String ,
        required: true,
    },
    genero: {
        type :String,
        required:true,
    },
    anoPublicacion: {
        type : Number,
        required:true,
    },
    imagenPortada: {
        type: String,
        required: true,
    },
    autor: {
        type:Schema.Types.ObjectId,
         ref:'Autor'
    },

}, {
    timestamps: true,
    versionKey: false
});

const LibroModel = model('Libro', libro);
export  { LibroModel };