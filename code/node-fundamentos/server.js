const express = require('express')

const router = express.Router()

var app= express()
app.use( router )

router.get('/carrera' , function(req , res){
    res.send('Lista de Carreras de la UPS.' )
})

app.use( '/',express.static('public'))

app.listen(5000)
console.log('La aplicación esta escuchando en http://localhost:5000')