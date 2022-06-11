const mongoose = require('mongoose')
const ProductSchema= require('../schema/productSchema')







const Product = mongoose.model("Product", ProductSchema)

module.exports = Product 

