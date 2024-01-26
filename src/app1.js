const express = require('express');
const port = 8080; 
const handlebars = require('express-handlebars')

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    res.render('index',{title:'Greeting', name:'John Doe', user:{name:'asdasd', id:''}})
})

app.listen(port, ()=>console.log('running on port ' + port))