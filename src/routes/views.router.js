const {Router} = require('express')

const router = Router()


const food = [
    {name:'meat', price:20.5},
    {name:'pasta', price:10.5},
    {name:'fruits', price:5},
    {name:'bread', price:5},
    {name:'bean', price:4},
  ]
  

router.get('/', (req, res)=>{

    let user = {
        name: 'John Doe',
        role: 'user'
    }

    res.render('foods',
        {title:'Greeting', 
        user, 
        food, 
        isAdmin: user.role == 'admin',
        style:'secundary.css'
     })
})

router.get('/register',(req, res)=>{
    res.render('register')
})


module.exports = router;