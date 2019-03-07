const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//config
const config = require( '../config');

//jwt 
var jwt = require('jsonwebtoken');
/**
 * email and password
 * find user
 * generate token
 * 
 */
router.post('/login', (req, res, next) =>{
    const {email, password} = req.body.userData;

    if(email === undefined || password === undefined){
        res.status(401).json({
            success: false,
            code: 'DD101_API_ERROR_01',
            message: "E-mail e/ou password invalid."
    });
    }else if (email === 'admin' && password === 'admin') {
        res.status(200).json({
            success: true,
            token: generatedToken

        })
     

    }else {
        let tokenData = {
            id:101
        }
        let generatedToken = jwt.sign(tokenData, 'somepass', {expiresIn: '1m'});
        res.json({
            success: true,
            token: generatedToken
        })

    }


});


module.exports = router;