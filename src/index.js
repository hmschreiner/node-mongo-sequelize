import Express from 'express'
import bodyParser from 'body-parser'

import database from './config/mongoose'
import userRoute from './routes/usersRoute'
import postsRoute from './routes/postsRoute'

const app = Express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces', 2);

userRoute(app)
postsRoute(app)

app.get('/', (req, res) => res.send('Olá mundo pelo Express!'))

database.connect().then(() => {
    app.listen(port, () => console.log('Api rodando na porta 3000'))
})