import { Router } from "express";

const libroRouter = Router()

libroRouter.get('/')
libroRouter.post('/')

libroRouter.get('/:id') //traer un libro por su id, uno solo
libroRouter.put('/:id') //actualizar
libroRouter.delete('/:id')//eliminar

export { libroRouter }