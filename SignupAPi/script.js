const mongoose  = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
require('./db/config');
const User = require('./db/productSchema');
app.use(express.json());
app.use(cors());
app.post('/signup',async(req,resp)=>{
    const user = new User(req.body).select('-password');
    const result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})
app.post('/login',async (req,resp)=>{
    const user = await User.findOne(req.body).select('-password');
    if(req.body.email && req.body.password){
        if(user){
            resp.send(user);
        }else{
            resp.send({result:'donot exist this email'});
        }
    }else{
        resp.send({result:"your email is not exist"})
    }

})
app.listen(8047);

