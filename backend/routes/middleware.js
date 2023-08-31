let jwt = require('jsonwebtoken');

//created my middleware function to verify the jwt token 
//and that will authenticate the user 
function checkJWTToken(req, res, next){
    if(req.headers.token){
        let token = req.headers.token;
        jwt.verify(token, 'secretKey', function(err, data){
            if(err){
                res.status(403).send({msg: 'invalid token!'})
                //next()
            }
            else{
                req.username = data.username;
                req.password = data.password;
                next()
            }
        })
    }
    else{
        res.status(401).send({msg: 'No token attached to the request'})
    }
}



module.exports = {checkJWTToken}