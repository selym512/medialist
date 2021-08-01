const express = require(`express`);
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');
const pool = require('../../db');
const Post = require('../../models/Post');
const mongoose = require('mongoose');

const uri = "mongodb+srv://milk:c4kaeS1xWjCkeQet@cluster0.wteq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));

//get all members
router.get('/', async (req, res) => { 
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch (err){
        res.json({ message : err });
    }
     });

//get a member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg : `No member of ID ${req.params.id} found`});
    }
    });
    
//update a member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name: member.name;
                member.email = updMember.email ? updMember.email: member.email;

                res.json({ msg: 'Member updated', member});
            }
        });
    }
    else{
        res.status(400).json({ msg : `No member of ID ${req.params.id} found`});
    }
    });

//upload member
router.post('/', async (req, res) => {
    const newMember = new Post ({
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
    });
    if(!newMember.name || !newMember.email){
        return res.status(400).json({ msg: 'Please include a name and email'});
    }
    console.log("RECIEVED: ", newMember);
    try {
        const savedPost = await newMember.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err })
    }
});
//upload todos
router.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1)",
            [description]
        );
        
        res.json(newTodo);
    } catch (err) {
        console.error(err.message);
    }
});

//delete a member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json({
            msg: 'Member deleted', 
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    }
    else {
        res.status(400).json({ msg : `No member of ID ${req.params.id} found`});
    }
    });

module.exports = router;