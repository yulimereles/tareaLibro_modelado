import { Router } from "express";
import {
    ctrlCreateNewAutor,
    ctrlDeleteAutor,
    ctrlGetAllAutor,
    ctrlGetAutorById,
    ctrlUpdateAutor
} from '../controllers/autorControllers.js'
const autorrRouter = Router()

autorrRouter.get('/', ctrlGetAllAutor)
autorrRouter.post('/',  ctrlCreateNewAutor)

autorrRouter.get('/:id', ctrlGetAutorById) //traer solo por su id, uno solo.
autorrRouter.put('/:id',  ctrlUpdateAutor) //atualizar 
autorrRouter.delete('/:id', ctrlDeleteAutor)//eliminar

export { autorrRouter }