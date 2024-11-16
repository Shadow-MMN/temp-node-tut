const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return; 
    } 
    
    if (req.url === '/about') {
        res.end('Here is our short history');
        return; 
    }


    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>Oops!</h1>
        <p>We cannot find the page you're looking for.</p>
        <a href='/'>Back to Home</a>
    `);
});


server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
