const mongoose = require('mongoose');


const bookSchema  =  new mongoose.Schema(
    {
        title:{type:String},
        author:{type:String},
        description:{type: String},
        category:{type: mongoose.Schema.Types.ObjectId, ref: "category"},
        image:{type: String},
        year:{type: Number},
        puplish:{type: String},
        price:{type: Number},
        rating:{type: Number},
        comment:[{type: mongoose.Schema.Types.ObjectId, ref:"comment"}],
    }
);


module.exports =mongoose.model("book" ,bookSchema);