const express = require('express')

const app = express()

app.use(morgan('dev'))


const PORT = 4600

app.listen(PORT, ()=>{
    console.log(`Listening on port http://localhost:${PORT}`)
})