const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    pdf: {
        type: String,
        required: true,
    },
    audio: {
        type: String,
        required: true,
    },
    
});

const db = mongoose.model('book',bookSchema);

// GET request: Retrieve all Books
router.get("/",async (req,res)=>{
    console.log('req recieved');
    const books = await  db.find({});
    console.log(books);
    res.send(books);
});



module.exports=router;
