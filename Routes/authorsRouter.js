const express = require('express')
const authorsRouter = express.Router()
const authorController = require('../Contollers/authorController')

authorsRouter.get('/', authorController.getAllAuthors)

authorsRouter.post('/', authorController.createNewAuthors)

authorsRouter.get('/', authorController.getAthourById)

authorsRouter.delete('/:id', authorController.deleteAuthorById)

authorsRouter.put('/:id', authorController.updateAuthorById)


module.exports = authorsRouter