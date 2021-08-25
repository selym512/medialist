const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsersSchema = mongoose.Schema({

    password: String,
    email: String,
    id: String,
    watchList: [{
        title: String,
        description: String,
        rating: Number,
        watched: Boolean,
        image: String

    }]

});

UsersSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log("hashing password");
    next();
    }
);

module.exports = mongoose.model('Users', UsersSchema);