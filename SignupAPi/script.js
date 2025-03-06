const mongoose  = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
require('./db/config');
const User = require('./db/productSchema');
app.use(express.json());
app.use(cors());
app.post('/',async(req,resp)=>{
    const user = new User(req.body);
    const result = await user.save();
    resp.send(result);
})
app.listen(8047);

