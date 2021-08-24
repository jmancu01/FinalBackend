import express from 'express'
import path from 'path'
import * as http from 'http'

//llamo a express
const app = express()

//seteo la public folder como la principal
const publicFolderPath = path.resolve(__dirname, '../../public')
app.use(express.static(publicFolderPath))
//difino la ruta de inicio
app.get('/', (req, res) => {
    res.json(
        {
            msg: 'Hola',
        }
    )
})



export const myServer = new http.Server(app)