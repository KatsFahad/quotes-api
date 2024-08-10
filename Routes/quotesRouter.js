const express = require('express')
const quotesRouter = express.Router()
const fs = require('fs')

quotesRouter.get('/', (req,res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to quotes')
        }else{
            res.json(JSON.parse(data))
        }
    })
})

quotesRouter.post('/', (req,res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to quotes')
        }else{
            fs.writeFile('./Modules/quotes.json', JSON.stringify([...JSON.parse(data),req.body],null,2), (err)=>{
                if(err){
                    res.send('Failed to a Quote')
                }else{
                    res.send('Quote added Successfully')
                }
            })
        }
    })
})

quotesRouter.get('/:idNo', (req,res)=>{
    const id = req.params.idNo
    fs.readFile('./Modules/authors.json', (err, data)=>{
        if(err){
            res.send('Failed to get the specific data for quote')
        }else{
            const quote = data.find(q=> q.id === id);
            if(quote){
                console.log(quote)
                res.send(quote)
            }else{
                res.send('No quote by that id')
            }
            }
        
    })
})

quotesRouter.delete('/:idNo', (req,res)=>{
    const id = req.params.id
    fs.readFile('./Modules/authors.json', (err, data)=>{
        if(err){
            res.send('Failed to get the specific data for quote')
        }else{
            const updatedAthours = data.filter(q => q.id !== id);
            res.send('deleted quote')
            }
        
    })
})

module.exports = quotesRouter