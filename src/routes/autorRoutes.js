import { Router } from "express";

const autorRouter = Router()

autorRouter.get('/')
autorRouter.post('/')

autorRouter.get('/:id') //traer solo por su id, uno solo.
autorRouter.put('/:id') //atualizar 
autorRouter.delete('/:id')//eliminar

export { autorRouter }