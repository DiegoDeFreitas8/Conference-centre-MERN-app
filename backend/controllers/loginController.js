const express = require('express');
const app = express();
const Login = require('../models/loginModel');
let jwt = require('jsonwebtoken');

//on this page i have created a read function for my login db and it sends
//back the specific user that matches the username and password
exports.readLogin = async function(req, res){
    const user = await Login.findOne({username: req.body.username, password: req.body.password})
    if(user){
        res.send(user)
        console.log("Read logins...")
    }
}

//i also have a create function that gets the username and password
//from the frontend and saves it in the db as well as the generated
//jwt
exports.createLogin = function(req, res) {
    const usr = req.body.username;
    const pwd = req.body.password;
    const isAdmin = req.body.admin

    if(usr && pwd) {
        let token = jwt.sign({
            username: usr,
            password: pwd,
            admin: isAdmin
        }, 'secretKey');
    
        
        const login = new Login({
            username: usr,
            password: pwd,
            admin: isAdmin,
            token: token
        });

        login.save()
        .then((data) => {
            console.log("Login saved successfully...");
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
        
    }
    else{
        res.send({msg: 'user not authenticated'})
    }

}
