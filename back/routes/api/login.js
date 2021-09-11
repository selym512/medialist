const express = require('express');
const router = express.Router();
const Users = require('../../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//3 days
const maxAge = 3* 24 * 60 * 60;

//jwt create token
const createToken = (id) => {
    return jwt.sign({id}, 'its a secret to everyone', {
        expiresIn: maxAge
    });
}

//log in- confirm user and password match
router.post('/', async (req, res) => {
    const user = new Users ({
        email: req.body.email,
        password: req.body.password
    })
    if(!req.body.email || !req.body.password){
        console.log('Please include a password and email');
        return res.status(400).json({ msg: 'Please include a password and email'});
    }
    console.log("email received: " + req.body.email);
    const query = await Users.findOne({email : user.email});
    console.log("queried!" + JSON.stringify(query));
    if(query){
        const match = await bcrypt.compare(req.body.password, query.password);
        console.log("DO THEY MATCH?: " + match);
        if(match){
            const token = createToken(query.id);
            res.cookie('jwt', token, { maxAge: maxAge * 3000, sameSite:'Lax'});
            res.cookie('id', query.id, { maxAge: maxAge * 3000, sameSite:'Lax'});
            res.json({msg: "logged in"});
        }
        else{
            console.log("the passwords don't match");
            res.json({
                msg: "incorrect password"
            });
        }
    }
    else{
        console.log("account not found");
    }
});



module.exports = router;