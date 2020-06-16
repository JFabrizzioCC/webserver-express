const http = require('http'); //

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'aplication/json'});

    let salida ={
        nombre: 'fabrizzio',
        apellido:'cordova',
        edad : 20,
        url: req.url
    }
    //res.write('hola mundo'); 
    res.write(JSON.stringify(salida)); 
    res.end();
})
.listen(8080); 

console.log('escuchando el puerto 8080');
