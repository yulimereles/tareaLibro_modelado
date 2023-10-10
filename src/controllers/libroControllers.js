import { LibroModel } from '../models/libroModels.js'

//se crea un nuevo libro y se maneja las solicitudes de creacion nuevo libro
export const ctrlCreateNewLibro = async ( req, res) => {
   //extrae todo el contenido del cuerpo req.body
    const { content } = req.body
try {
    const newLibro = new LibroModel({ content  })
    //se crea un nuevo libro  y se utiliza el metodo save para guardar nuevo libro en la db
    await newLibro.save()
    res.status(201).json(newLibro)
} catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Algo salio mal'})
}
}

//obtener todos los libros, find() para buscar todos los libros en la db
export const ctrlGetAllLibros = async (req, res) => {
    try {
        const allLibro = await LibroModel.find()
        res.status(200).json(allLibro)
    } catch (error) {
        console.log('Error', error)
        res.status(500).json({ message: 'No hay libros' })
    }
}

//obtener un libro por su id, utilizar el metodo .findById para buscar por su id
export const ctrlGetLibroById = async (req, res) => {
    const libroId = req.params.id
  
    try {
      const libro = await LibroModel.findById(libroId)
  
      if (!libro) {
        return res.sendStatus(403)
      }
  
      res.status(200).json(libro)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Algo salio mal' })
    }
  }
//actualizar un autor existente
export const ctrlUpdateAutor = async (req, res) => {
    const libroId = req.params.id
    const { content, done } = req.body

    try {
        //findByIdAndUpdate para buscar y actualizar el libro por su id
        await libroModel.findByIdAndUpdate( libroId, { content, done })
        res.sendStatus(202)
    } catch (error ) {
        console.log(error)
    res.status(500).json ({ message: 'Algo salio mal'}) 
    }
}

//eliminar un libro
export const ctrlDeleteLibro = async (req, res) => {
    const libroId = req.params.id;

    try {
        //findByIdAndDelete para buscar y eliminar por su id
        await LibroModel.findByIdAndDelete({ _id : libroId})
        res.sendStatus(202)
    } catch (error ) {
        console.log(error)
        res.status(500).json({ message: 'Algo salió mal...' })
    }
}
