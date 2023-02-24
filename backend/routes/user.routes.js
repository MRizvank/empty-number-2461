const express = require("express");
const User = require("../models/user.model");

const userRoutes = express.Router();



userRoutes.post("/signup", async (req, res) => {
    let { email, password } = req.body;
    let exUser = await User.findOne({ email: email });

    try {
        console.log(exUser);
        if (exUser)
            res.send("this email allready exists");
        else {
            let nv = await User.create({ ...req.body });
            res.send("succesfully signedup");
        }
    }
    catch (e) {
        res.status(401).send(e.message);
    }
})

userRoutes.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    try {
        if (user) {
            if (user.password == password) {
                console.log(user, password)
                res.send(`${user._id}-${email}-${password}`);
            }
            else {
                res.send("wrong password");
            }
        }
        else
            res.send("the given email does not exist");


    }
    catch (e) {
        res.status(401).send(e);
    }
})


module.exports = userRoutes;