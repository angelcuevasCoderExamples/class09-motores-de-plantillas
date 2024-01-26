const {Router} = require('express')

const router = Router();

const users = []

router.post('/', (req,res)=>{
    const user = req.body; 
    users.push(user);
    res.send({status:'success'});
})

router.get('/',(req, res)=>{
    res.send({users:users})
})

module.exports  = router;