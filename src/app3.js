const express = require('express');
const port = 8080; 
const handlebars = require('express-handlebars')

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars')


const food = [
  {name:'meat', price:20.5},
  {name:'pasta', price:10.5},
  {name:'fruits', price:5},
  {name:'bread', price:5},
  {name:'bean', price:4},
]

app.get('/', (req, res)=>{

    let user = {
        name: 'John Doe',
        role: 'user'
    }

    res.render('foods',{title:'Greeting', user, food, isAdmin: user.role == 'admin' })
})

app.listen(port, ()=>console.log('running on port ' + port))