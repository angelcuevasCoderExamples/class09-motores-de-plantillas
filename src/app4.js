const express = require('express');
const port = 8080; 
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/views.router')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(`${__dirname}/public`))

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

app.listen(port, ()=>console.log('running on port ' + port))