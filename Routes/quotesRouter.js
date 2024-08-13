const express = require('express')
const quotesRouter = express.Router()
const fs = require('fs')
const { parse } = require('path')

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

quotesRouter.get('/:id', (req,res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Quote Data')
        }else{
            const quotes = JSON.parse(data)
            const quote = quotes.find(q=> q.id === parseInt(req.params.id))
            if(quote){
                res.json(quote)
            }else{
                res.send('No quote for that id for found')
            }
        }

    })
})

quotesRouter.delete('/:id', (req,res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Quote Data')
        }else{
            const quotes = JSON.parse(data)
            const updatedQuotes = quotes.filter(q => q.id !== req.params.id);
            res.send('Quote deleted')
        }
    })
    
})

quotesRouter.put('/:id', (req, res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Quote Data')
        }else{
            const quotes = JSON.parse(data)
            const UpdateQuote = quotes.find(q=> q.id === parseInt(req.params.id))
            if(UpdateQuote){
                UpdateQuote.name = req.body.name
                res.json('Quote updated')
            }else{
                res.send('No Quote for that id for found')
            }
        }

    })
})

module.exports = quotesRouter