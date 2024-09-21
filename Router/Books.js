const express = require('express');

const router = express.Router();


let books = {
    "1" : {"Author" :"John Doe","Title": "Sky Changes" , "review":{} },
    "2" : {"Author" :"Abrahim chester","Title": "The moon and the Nights" , "review":{} },
    "3" : {"Author" :"Chole dumping","Title": "The persona" , "review":{} },
    "4" : {"Author" :"Stefan stan","Title": "The humans" , "review":{"ander":"Good Book","John":"Highly recomended"} },
    "5" : {"Author" :"jessie magret","Title": "The life of PI" , "review":{} },
    "6" : {"Author" :"Sanderson","Title": "The apologies" , "review":{} },
    "7" : {"Author" :"ander dice","Title": "Feelings" , "review":{} },
}


// GET request: Retrieve all Books
router.get("/",async (req,res)=>{
    console.log('req recieved');
    const response = await JSON.stringify(books,null,4);
    res.send(response);

});


router.get('/:ISBN', function(req, res) {
    const ISBN = req.params.ISBN;
    res.send(books[ISBN]);
});
router.get('/Author/:Author', function(req, res) {
    console.log('req recieved');
    
    const Author = req.params.Author;
    const keys = Object.keys(books);
    const booksbyauthor = keys.filter(key => books[key].Author === Author);
    
    if(booksbyauthor.length>0){
        res.send(books[booksbyauthor]);
    }else{
        res.send("No books found by this author");
    }
});
router.get('/Title/:Title', function(req, res) {
    console.log('req recieved');
    
    const Title = req.params.Title;
    const keys = Object.keys(books);
    const booksbytitle = keys.filter(key => books[key].Title === Title);
    
    if(booksbytitle.length>0){
        res.send(books[booksbytitle]);
    }else{
        res.send("No books found by this title");
    }
});
router.get('/Review/:ISBN', function(req, res) {
    console.log('req recieved');
    
    const ISBN = req.params.ISBN;
    res.send(books[ISBN].review);
});
router.put("/Review/:ISBN", function(req, res) {
    const ISBN = req.params.ISBN;
    const review  = req.body.review;
    books[ISBN].review = review;
    res.send(`Review of Book with ISBN ${ISBN} has been updated successfully to ${review}`);
});


router.delete("/Review/:ISBN", (req, res) => {
    const person = req.body.person;
    const ISBN = req.params.ISBN;
    delete books[ISBN].review[person] ;

    res.send(`Review of ${person} has been deleted.`);
});

module.exports=router;
