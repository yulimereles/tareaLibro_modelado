import { Router } from "express"
import {
    ctrlCreateNewLibro,
    ctrlDeleteLibro, 
    ctrlGetAllLibros, 
    ctrlGetLibroById,
    ctrlUpdateAutor
} from '../controllers/libroControllers.js'

const libroRouter = Router()

libroRouter.get('/', ctrlGetAllLibros)
libroRouter.post('/', ctrlCreateNewLibro)

libroRouter.get('/:id', ctrlGetLibroById) //traer un libro por su id, uno solo
libroRouter.put('/:id', ctrlUpdateAutor) //actualizar
libroRouter.delete('/:id', ctrlDeleteLibro)//eliminar

export { libroRouter }