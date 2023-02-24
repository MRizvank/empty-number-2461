const express = require("express");
const product = require("../models/product.model");
const  mongoose  = require("mongoose");


const productRoutes = express.Router();



productRoutes.get("/", async (req, res) => {
    let { limit = 20, skip = 0 } = req.query;
    try {
        let prd = await product.find().skip(skip).limit(limit);
        res.send(prd);
    } catch (e) {
        res.send(e.message)
    }

})



productRoutes.get("/search", async (req, res) => {
    let q = ("/" + req.query.q + "/i")
    try {
        let prd = await product.find({ name: { '$regex': req.query.q, $options: "i" } }).limit(5);
        res.send(prd);
    } catch (e) {
        res.send(e.message);
    }


})

productRoutes.get("/:id", async (req, res) => {
    let id = req.params.id;
    id = new mongoose.Types.ObjectId(id)
    console.log(id)
    try {
        let prd = await product.findById(id);
        return res.send(prd);
    } catch (e) {
        return res.send(e.message);
    }

})


module.exports = productRoutes;