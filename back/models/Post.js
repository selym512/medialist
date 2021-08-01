const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({

    name: String,
    email: String,
    id: String

});

module.exports = mongoose.model('Posts', PostSchema);