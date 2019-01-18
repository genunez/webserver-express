const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        let salida = {
            nombre: 'Gonzalo',
            edad: 39,
            url: req.url

        }
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8084);

console.log('Escuchando puerto 8084');