var express = require('express');
var handler = express.Router();
var inventory = require('./inventory');

// Returns all the book in inventory
handler.get_all_books = function(){
    return inventory.books;
};

// Returns a book name by requested id
handler.get_book_by_id = function(book_id){
    var books = inventory.books;
    // Checks if the requested id is a number
    if(isNaN(book_id)) return {error: 'INVALID ID', msg: 'A book ID must be a number'};
    // Checks if the requested id is a number between 1-36
    if(book_id < 1 || book_id > 36) return {error: 'INVALID ID', msg: 'The possible values for a book ID are between 1-36'};
    for(var i = 0; i < books.length; i++) if(books[i].id == book_id) return books[i].name;
};

// Returns all the books that published in a curtain month
// Valid month value => three first letters of the month name in english - first letter is capital)
// Jan / Feb / Mar / Apr / ..... / Dec
handler.get_books_by_month = function(month){
    var books = inventory.books;
    var ret_books = [];
    // Check the validation of the requested month
    if(!is_valid_month(month)){
        var err_msg = 'Valid month value => three first letters of the month name in english - first letter is capital) ' +
            'Jan / Feb / Mar / Apr / ..... / Dec';
        return {error: 'INVALID MONTH', msg: err_msg};
    }
    // Push the compatible books to a new array (ret_books)
    for(var i = 0; i < books.length; i++) if(books[i].published == month) ret_books.push(books[i]);
    if(ret_books.length > 0) return ret_books;
    // If there were no books found for that month, return a massage
    else return 'No books found in our books inventory for the requested month';
};

// (boolean) Checks the validation of the requested month
function is_valid_month(month){
    switch(month) {
        case 'Jan':
            return true;
            break;
        case 'Feb':
            return true;
            break;
        case 'Mar':
            return true;
            break;
        case 'Apr':
            return true;
            break;
        case 'May':
            return true;
            break;
        case 'Jun':
            return true;
            break;
        case 'Jul':
            return true;
            break;
        case 'Aug':
            return true;
            break;
        case 'Sep':
            return true;
            break;
        case 'Oct':
            return true;
            break;
        case 'Nov':
            return true;
            break;
        case 'Dec':
            return true;
            break;
    }
    return false;
}

module.exports = handler;