var express = require('express');
var routers = express.Router();
var books_handler = require('./inventory-handler');

// Get all the books from inventory
routers.post('/all-books', function(req, res){
    res.send(JSON.stringify(books_handler.get_all_books()));
});

// Get book name by id (possible ids: 1-36)
routers.post('/book-name&:book_id', function(req, res){
    res.send(JSON.stringify(books_handler.get_book_by_id(req.params.book_id.split('=')[1])));
});

// Get all the books that published in a curtain month
// Valid month value => three first letters of the month name in english - first letter is capital)
// Jan / Feb / Mar / Apr / ..... / Dec
routers.post('/books-by-month&:month', function(req, res){
    res.send(JSON.stringify(books_handler.get_books_by_month(req.params.month.split('=')[1])));
});

module.exports = routers;