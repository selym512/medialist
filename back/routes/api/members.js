const express = require(`express`);
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');
const pool = require('../../db');


//get all members
router.get('/', (req, res) => { res.json(members); });

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
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({ msg: 'Please include a name and email'});
    }
    members.push(newMember);
    const {name} = req.body;
    const newMem = pool.query("INSERT INTO todo (description) VALUES($1)",[name])
    .then(res.json(newMem));
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