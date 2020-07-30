const express = require('express');
const mongoose = require('mongoose');
mongose=connect('//kewalin:kkpp0649649520@kewalin.nskcr.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
mangose=mongoose.connect();
const cors = require('cors');
const app = express();
const port = process.env.PORT | 80 ;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.get('/', (req, res) => {
   res.send('Hello World') ;
})
app.get('/api', (req, res) => {
    res.json({ time: Date() }) ;
 })
app.listen(port, () =>{
    console.log('Server runing http://localhost');
});
