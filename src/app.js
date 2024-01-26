const express = require('express');
const port = 8080; 
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/views.router')
const usersRouter = require('./routes/users.router')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(`${__dirname}/public`))

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars')

/*

Realizar un formulario en una nueva plantilla.

1-Se creará un archivo “register.handlebars” como nueva plantilla, 
    donde se colocará un form
2- Dicho form debe servir para registrar un usuario, por lo que contará con nombre, 
    correo, y contraseña
3- Enviar los datos a una ruta POST ‘/user’, y guardar el usuario en un arreglo.
     Confirmar que el guardado se realice exitosamente. 
*/


app.use('/', viewsRouter)
app.use('/api/users', usersRouter)

app.listen(port, ()=>console.log('running on port ' + port))