const express = require('express')
const fs = require('fs')
const authorsRouter = express.Router()

authorsRouter.get('/', (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Authors')
        }else{
            res.json(JSON.parse(data))
        }
    })
})

authorsRouter.post('/', (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to quotes')
        }else{
            fs.writeFile('./Modules/authors.json', JSON.stringify([...JSON.parse(data),req.body],null,2), (err)=>{
                if(err){
                    res.send('Failed to a Author')
                }else{
                    res.send('Author added Successfully')
                }
            })
        }
    })
})

authorsRouter.get('/:id', (req,res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Quote Data')
        }else{
            const authors = JSON.parse(data)
            const author = authors.find(a=> a.id === parseInt(req.params.id))
            if(author){
                res.json(author)
            }else{
                res.send('No Author for that id for found')
            }
        }

    })
})

authorsRouter.delete('/:idNo', (req,res)=>{
    const id = req.params.idNo
    fs.readFile('./Modules/authors.json', (err, data)=>{
        if(err){
            res.send('Failed to get the specific data for authour')
        }else{
            const author = data.find(a=> a.id === id);
            if(author){
                console.log(author)
                res.send(author)
            }else{
                res.send('No author by that id')
            }
            }
        
    })
})

module.exports = authorsRouter