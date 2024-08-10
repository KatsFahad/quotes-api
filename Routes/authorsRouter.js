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

authorsRouter.get('/:idNo', (req,res)=>{
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

authorsRouter.delete('/:idNo', (req,res)=>{
    const id = req.params.id
    fs.readFile('./Modules/authors.json', (err, data)=>{
        if(err){
            res.send('Failed to get the specific data for authour')
        }else{
            const updatedAthours = data.filter(authour => authour.id !== id);
            res.send('deleted author')
            }
        
    })
})

module.exports = authorsRouter