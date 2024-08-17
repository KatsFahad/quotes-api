const express = require('express')
const quotesRouter = express.Router()
const quoteController = require('../Contollers/quoteController')
const { parse } = require('path')

quotesRouter.get('/', quoteController.getAllQuotes)

quotesRouter.post('/', quoteController.createNewQuote)

quotesRouter.get('/:id', quoteController.getQuoteById)

quotesRouter.delete('/:id', quoteController.deleteQuoteById)

quotesRouter.put('/:id', quoteController.updateQuoteById)

module.exports = quotesRouter