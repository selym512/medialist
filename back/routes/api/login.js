const express = require(`express`);
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');
const pool = require('../../db');
const Post = require('../../models/Post');
const mongoose = require('mongoose');

const uri = "mongodb+srv://milk:c4kaeS1xWjCkeQet@cluster0.wteq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


//get all members
router.get('/', async (req, res) => { 
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch (err){
        res.json({ message : err + "idk whats goin on" });
    }
     });



module.exports = router;