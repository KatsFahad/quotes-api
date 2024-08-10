const express = require('express')
const morgan = require('morgan')

const quotesRouter = require('./Routes/quotesRouter')
const authorsRouter = require('./Routes/authorsRouter')


const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('<h2>Getting, creating Quotes and Authors <br> Using apis with Node and Express</h2> ')
})

app.use('/quotes', quotesRouter)

app.use('/authors', authorsRouter)

const PORT = 4600

app.listen(PORT, ()=>{
    console.log(`Listening on port http://localhost:${PORT}`)
})