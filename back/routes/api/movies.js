const express = require(`express`);
const router = express.Router();
var axios = require("axios").default;
const v = require('voca');
const Users = require('../../models/Users');

router.put('/', async (req, res) => {
    const found = WatchList.findById()
});
router.post('/', async (req, res) => {
    const newList = new WatchList({

    })
});
//retrieves most relevant movie ID based off users search
//retrieves movie overview from IMDB
router.get('/', async (req, res) => { 
    var resp1 = {};
    var resp2;
    var options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/find',
        params: {q: v.replaceAll(v.substring(req.url, 4), '+', ' ')},
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': 'e189eada59msh18cccafd3836b61p105e92jsn88a874a790a5'
        }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            resp1 = response.data;
            var id = response.data.results[0].id;
            id = v.slice(id ,7,-1);

            var options2 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
            params: {tconst: id, currentCountry: 'US'},
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                'x-rapidapi-key': 'e189eada59msh18cccafd3836b61p105e92jsn88a874a790a5'
            }};
            axios.request(options2).then(function (response2) {
                console.log(response2.data);
                resp2 = response2.data;
                res.json({resp1,resp2});
            }).catch(function (error2) {
                console.error(error2);
            });
        }).catch(function (error) {
            console.error(error);
        });
});
//retreives one user and their watchlist
router.get('/watchlist', async(req, res) =>{
    userdata = await Users.findOne({"id" : req.cookies['id']});
    console.log(userdata.watchList);
    res.json(userdata);
});
//inserts a movie into user's watchlist
router.put('/watchlist', async(req, res) =>{
    //pulls up ID and receives movie data for insertion
    userdata = await Users.find({"id" : req.cookies['id']});
    Users.findOneAndUpdate({"id" : req.cookies['id']}, {$push: {watchList: req.body}}, (err, doc) => {
        if(err){
            console.log(err);
        }
        console.log("doc updated = " + doc);
    });
    console.log(req.body);
    console.log(userdata);
    res.json(req.body);
});

module.exports = router;