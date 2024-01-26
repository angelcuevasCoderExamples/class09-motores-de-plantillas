const express = require('express');
const port = 8080; 
const handlebars = require('express-handlebars')

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars')

/*
1 - Utilizar la misma estructura mostrada por el profesor, 
    para poder levantar un servidor que utilice handlebars 
    como motor de plantillas. 
2 - Configurar la plantilla para que muestre los siguientes datos: 
    nombre, apellido, edad, correo, teléfono.
3 - Crear un array “users” que cuente con 5 usuarios de tipo objeto, 
    cada uno con los datos mencionados arriba.
4 - Al llamar al método get ‘/’, generar un número random 
    para elegir a alguno de los usuarios y mostrar el usuario 
    seleccionado al azar en la plantilla.
5 - Observar los diferentes resultados en el navegador. 

*/

const users = [
    {name:'John', lastname:'Doe', age:30, phone:12344, email:'john@gmail.com'},
    {name:'Janee', lastname:'Doe', age:33, phone:1111, email:'jane@gmail.com'},
    {name:'Juan', lastname:'Diaz', age:20, phone:122224, email:'jd@gmail.com'},
    {name:'Martin', lastname:'Lopez', age:23, phone:33344, email:'ml@gmail.com'},
    {name:'Maria', lastname:'Diaz', age:31, phone:12224, email:'md@gmail.com'}
]

app.get('/', (req, res)=>{
    const pos = Math.floor(Math.random()*users.length)
    res.render('index',{title:'Greeting', name:'John Doe', user:users[pos]})
})

app.listen(port, ()=>console.log('running on port ' + port))