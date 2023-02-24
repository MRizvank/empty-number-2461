const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, },
    price: { type: Number, required: true },
    rating: Number
}, {
    versionKey: false,
    timestamps: true
});

const product = mongoose.model("products", productSchema);

module.exports = product;