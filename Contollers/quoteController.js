const fs = require('fs')

const getAllQuotes = (req,res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to quotes')
        }else{
            res.json(JSON.parse(data))
        }
    })
}

const createNewQuote = (req,res)=>{
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
}

const getQuoteById = (req,res)=>{
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
}

const deleteQuoteById = (req,res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Quote Data')
        }else{
            const quotes = JSON.parse(data)
            const quoteIndex = quotes.findIndex(q=> q.id === parseInt(req.params.id))
            if(quoteIndex === -1){
                res.send('Failed to get quote with that id')
            }else{
                quotes.splice(quoteIndex, 1)
                fs.writeFile('./Modules/quotes.json', JSON.stringify(quotes, null, 2), (err)=>{
                    if(err){
                        res.send('Failed to update quote data')
                    }else{
                        res.send('Quote deleted')
                    }
                })
            }
        }
    })
    
}

const updateQuoteById = (req, res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Quote Data')
        }else{
            const quotes = JSON.parse(data)
            const quoteIndex  = quotes.findIndex(q=> q.id === parseInt(req.params.id))
            if(quoteIndex === -1){
                res.send('Failed to get author with that id')
            }else{
                const dataToUpdate = req.body
                quotes[quoteIndex] = { ...quotes[quoteIndex], ...dataToUpdate};
                fs.writeFile('./Modules/quotes.json', JSON.stringify(quotes, null, 2), (err)=>{
                    if(err){
                        res.send('Failed to update the quote with that id')
                    }else{
                        res.send('Quote updated')
                    }
                })
            }
        }

    })
}

module.exports = {
    getAllQuotes,
    createNewQuote,
    getQuoteById,
    deleteQuoteById,
    updateQuoteById
}