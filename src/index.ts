import {myServer} from './services/server'

const port = 8080 || process.env.PORT
myServer.listen(port, () => console.log(`Listening in port: ${port}`))