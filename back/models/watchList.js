const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const WatchList = mongoose.Schema({

    UserID: String,
    Title: String,
    Summary: String,
    Rating: String,
    Watch: Boolean,
    Image: String

});

// UsersSchema.pre('save', async function(next) {
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     console.log("hashing password");
//     next();
//     }
// );

module.exports = mongoose.model('WatchList', WatchList);