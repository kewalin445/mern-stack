const express = require('express');
const User = requtre('../models/index');
const router = express.Router();

router.get('/', (rep,res) => {
    User.fiond({},(err,data) => {

    })
})

router,get('/:id', (req,res) => {
    User.findBy(req.params.id,(err,data) =>{

    })
})

router.delete('/:id',async,(req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({'message':'Deleted'})

})

router.post('/',(req,res) => {
    User = new User({
        name: req. body.name,
        email:req.body.email,
        password:req.body.password
    })
    User.save(() => {
        res.json(user);
    })
})

router.put('/:id' ,asyns (req,res) => {
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.json({'message': 'Update'})
})


module.exports = router