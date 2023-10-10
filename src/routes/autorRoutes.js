import { Router } from "express";
import {
    ctrlCreateNewAutor,
    ctrlDeleteAutor,
    ctrlGetAllAutor,
    ctrlGetAutorById,
    ctrlUpdateAutor
} from '../controllers/autorControllers.js'
const autorRouter = Router()

autorRouter.get('/', ctrlGetAllAutor)
autorRouter.post('/',  ctrlCreateNewAutor)

autorRouter.get('/:id', ctrlGetAutorById) //traer solo por su id, uno solo.
autorRouter.put('/:id',  ctrlUpdateAutor) //atualizar 
autorRouter.delete('/:id', ctrlDeleteAutor)//eliminar

export { autorRouter }