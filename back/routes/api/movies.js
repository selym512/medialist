const express = require(`express`);
const router = express.Router();
var axios = require("axios").default;
const v = require('voca');


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
            }
            };

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

module.exports = router;