const fs = require('fs')

const getAllAuthors = (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Authors')
        }else{
            res.json(JSON.parse(data))
        }
    })
}

const createNewAuthors = (req,res)=>{
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
}

const getAthourById = ('/:id', (req,res)=>{
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

const deleteAuthorById = (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
        }else{
            const authors = JSON.parse(data)
            authorIndex = authors.findIndex(a=> a.id === parseInt(req.params.id))
            if(authorIndex === -1){
                res.send('Author with that id not found')
            }else{
                authors.splice(authorIndex, 1)
                fs.writeFile('./Modules/authors.json', JSON.stringify(authors, null, 2), (err)=>{
                    if(err){
                        res.send('Failed to update the author data')
                    }else{
                        res.send('Author deleted')
                    }
                })
            }
        }
    }
)}

const updateAuthorById = (req, res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
        }else{
            const authors = JSON.parse(data)
            const authorIndex  = authors.findIndex(a=> a.id === parseInt(req.params.id))
            if(authorIndex === -1){
                res.send('Failed to get author with that id')
            }else{
                const dataToUpdate = req.body
                authors[authorIndex] = { ...authors[authorIndex], ...dataToUpdate};
                fs.writeFile('./Modules/authors.json', JSON.stringify(authors, null, 2), (err)=>{
                    if(err){
                        res.send('Failed to update the author with that id')
                    }else{
                        res.send('Author updated')
                    }
                })
            }
        }

    })
}



module.exports = {
    getAllAuthors,
    createNewAuthors,
    getAthourById,
    deleteAuthorById,
    updateAuthorById
}