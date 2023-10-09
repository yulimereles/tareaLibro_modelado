import { connect } from "mongoose";

export function connectMongo () {
    connect(process.env.MONGO_URI)
    //connet* devuelve una promesa y se utiliza .then
    // dentro de una funcion muestra un mensaje que se conecto y muestra el nombre databaseName
    .then(db => console.log(`DB conectada exitoso${db.connection.db.databaseName}`))
    .catch(error => console.log({message: 'No se a podido conectar a la bases de datos'},error))
}