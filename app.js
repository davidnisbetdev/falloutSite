import express from 'express'
const router = express.Router()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { engine } from 'express-handlebars'
import indexRoute from "./routes/index.js";
import vault from './routes/routes.js'

dotenv.config()

const app = express()

app.use(express.json());
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index'
}))

app.set('view engine', 'hbs')
app.set('views', './views/')

app.use(express.static('public'))

app.use(bodyParser.json())

// app.get("/", (req, res) => {
//     res.render('index.hbs', { title: 'Home' })
// })

app.use("/", indexRoute);
app.use('/api', vault)



const PORT = 2701

app.listen(PORT, () => {
    console.log(`Port listening on ${PORT}`)
})

