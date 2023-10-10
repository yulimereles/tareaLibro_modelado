import { AutorModel } from '../models/autorModel.js'

//se crea un nuevo autor y se maneja las solicitudes de creacion nuevo autor
export const ctrlCreateNewAutor = async ( req, res) => {
    const { content } = req.body
try {
    const newAutor = new AutorModel({ content  })
    await newAutor.save()
    res.status(201).json(newAutor)
} catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Algo salio mal'})
}
}

export const ctrlGetAllAutor = async (req, res) => {
    try {
        const allAutor = await AutorModel.find()
        res.status(200).json(allAutor)
    } catch (error) {
        console.log('Error', error)
        res.status(500).json({ message: 'No hay autores' })
    }
}

export const ctrlGetAutorById = async (req, res) => {
    const autorId = req.params.id
  
    try {
      const autor= await AutorModel.findById(autorId)
  
      if (!autor) {
        return res.sendStatus(403)
      }
  
      res.status(200).json(autor)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Algo salio mal' })
    }
  }

export const ctrlUpdateAutor = async (req, res) => {
    const autorId = req.params.id
    const { content, done } = req.body

    try {
        await AutorModel.findByIdAndUpdate( autorId, { content, done })
        res.sendStatus(202)
    } catch (error ) {
        console.log(error)
    res.status(500).json ({ message: 'Algo salio mal'}) 
    }
}

export const ctrlDeleteAutor = async (req, res) => {
    const autorId = req.params.id;

    try {
        await AutorModel.findByIdAndDelete({ _id : autorId})
        res.sendStatus(202)
    } catch (error ) {
        console.log(error)
        res.status(500).json({ message: 'Algo salió mal...' })
    }
}
