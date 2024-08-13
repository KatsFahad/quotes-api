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
            res.send('Failed to authors')
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
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
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

authorsRouter.delete('/:id', (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
        }else{
            const authors = JSON.parse(data)
            const updatedAthours = authors.filter(a => a.id !== req.params.id);
            res.send('Author deleted')
        }
    })
    
})

authorsRouter.put('/:id', (req, res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
        }else{
            const authors = JSON.parse(data)
            const author = authors.find(a=> a.id === parseInt(req.params.id))
            if(author){
                author.name = req.body.name
                res.json(author)
            }else{
                res.send('No Author for that id for found')
            }
        }

    })
})


module.exports = authorsRouter