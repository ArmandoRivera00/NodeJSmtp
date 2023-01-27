import express from 'express';
import User from "../models/user.model.js";

const router = express.Router();

router.get("/all", (req, res) =>{
    //logic
})

router.get("/login", (req, res) => {
    res.render("pages/login", { title: "Login"})
    //logic
})

router.get("/register", (req, res) => {
    res.render("pages/register", { title: "Register"})
    //logic
})

router.post('/login', (req, res) => {
    //logic
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then((user) => {
        console.log(user.users.dataValues);
        res.render("pages/index", { user: user})
    }).catch((err) => {
        console.log(err);
    })
})

router.post('/register',(req, res) =>{
    User.findOne({
        where: {
            email: req.body.email,
        }
    }).then((user) => {
        if(user) res.render("pages/login", { message: "This email address is already being used"});

        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then((user) => {
            res.render("pages/login")

        }).catch((err) => {
            console.log(err);
            //logic
        })
        //logic
    }).catch((err) => {
        console.log(err);
        //logic
    })
});


export default router;