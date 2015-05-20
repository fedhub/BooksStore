var express = require('express');
var inventory = express.Router();

inventory.books = [
    { id: '1', name: 'Gone For Good', published: 'Jan' },
    { id: '2', name: 'Scary Story', published: 'Jan' },
    { id: '3', name: 'Bible', published: 'Jan' },
    { id: '4', name: 'The Joiners', published: 'Feb' },
    { id: '5', name: 'The Pool', published: 'Feb' },
    { id: '6', name: 'The Godfather', published: 'Feb' },
    { id: '7', name: 'Scarface', published: 'Mar' },
    { id: '8', name: 'Pulp Fiction', published: 'Mar' },
    { id: '9', name: 'Once Upon A Time', published: 'Mar' },
    { id: '10', name: 'Yesterday', published: 'Apr' },
    { id: '11', name: 'Tomorrow', published: 'Apr' },
    { id: '12', name: 'Taxi Driver', published: 'Apr' },
    { id: '13', name: 'Planet Of The Apes', published: 'May' },
    { id: '14', name: 'Monkey Story', published: 'May' },
    { id: '15', name: 'The Story That Never Ends', published: 'May' },
    { id: '16', name: 'True Story', published: 'Jun' },
    { id: '17', name: 'False Story', published: 'Jun' },
    { id: '18', name: 'Great Story', published: 'Jun' },
    { id: '19', name: 'A Book Of C', published: 'Jul' },
    { id: '20', name: 'Java Book', published: 'Jul' },
    { id: '21', name: 'A Book Of C#', published: 'Jul' },
    { id: '22', name: 'Node For Beginners', published: 'Aug' },
    { id: '23', name: 'Node For Experts', published: 'Aug' },
    { id: '24', name: 'Math Book', published: 'Aug' },
    { id: '25', name: 'My Book', published: 'Sep' },
    { id: '26', name: 'Your Book', published: 'Sep' },
    { id: '27', name: 'Her Book', published: 'Sep' },
    { id: '28', name: 'Our Book', published: 'Oct' },
    { id: '29', name: 'Their Book', published: 'Oct' },
    { id: '30', name: 'Iron Lion Zion', published: 'Oct' },
    { id: '31', name: 'Exodus', published: 'Nov' },
    { id: '32', name: 'Misty Morning', published: 'Nov' },
    { id: '33', name: 'Got To Have Kaya Now', published: 'Nov' },
    { id: '34', name: 'Dreadlocks', published: 'Dec' },
    { id: '35', name: 'Life Of Pai', published: 'Dec' },
    { id: '36', name: 'The End', published: 'Dec' }
];

module.exports = inventory;