const fs = require('fs')

const getQuotes = (req,res)=>{
    fs.readFile('./Modules/quote.json', (err, data)=>{
        if(err){
            res.send('Failed to quotes')
        }else{
            res.json(JSON.parse(data))
        }
    })
}

module.exports = getQuotes