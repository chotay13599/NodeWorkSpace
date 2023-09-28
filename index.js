const fs = require('fs');
const http = require('http');
const path = require('path');


const templateOverview = fs.readFileSync(path.join(__dirname, 'template', 'index.html'), 'utf-8');

// const templateOverview = fs.readFileSync(`${__dirname}/template/index.html`, 'utf-8');


const productJson = `${__dirname}/data/dev/devData/`
const data = fs.readFileSync(`${productJson}product.json`, 'utf-8');
const dataObj = JSON.parse(data);
const server = http.createServer((req,res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end(templateOverview);
    }else if(pathName === '/product'){
        res.end('This is the product');
    }else if(pathName === '/api'){
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(data);
    }
    else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header' : "Host Myanmar"
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1',() => {
    console.log('Server is running on port 8000');
});

