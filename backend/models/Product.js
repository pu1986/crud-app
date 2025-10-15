const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    productName:{
        type: String,
        required: true,
        trim : true
    },
    price:{
       type: Number,
       required: true
    },
    productDecp:{
        type: String,
        required: true,
    },
    productDetails:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("products", ProductSchema);