const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' })
    let output = {
            nomre: 'Bryan',
            edad: 24,
            url: req.url
        }
        //res.write('Hello World');
    res.write(JSON.stringify(output));
    res.end();

}).listen(8080)

console.log('Listen on Port 8080')