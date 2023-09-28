const fs = require('fs');
const http = require('http');
const path = require('path');
// const txtRead = fs.readFileSync('./txt_data/read.txt', 'utf-8');
// fs.writeFileSync('./txt_data/write.txt', `${txtRead} - Created By ${Date.now()}`);
// console.log('Good Read and write'); // Synchronus - Blocking

// fs.readFile('./txt_data/read.txt', 'utf-8', (err,data1) => {
//     if(err) throw 'Error';
//     console.log(data1, "1");
//     fs.readFile('./txt_data/write.txt', 'utf-8', (err,data2) => {
//         console.log(data2, "2");
//     })
// });
// console.log("Asynchronous Native");

// const templateOverview = fs.readFileSync(path.join(__dirname, 'template', 'index.html'), 'utf-8');

const templateOverview = fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
const cardProduct = fs.readFileSync(`${__dirname}/template/card.html`,'utf-8');


const productJson = `${__dirname}/data/dev/devData/`
const data = fs.readFileSync(`${productJson}products.json`, 'utf-8');
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


/**
 * Assignment - Linux Permission Long Text Description
 *      - Request (9)
 *      - Created Server port - host name
 *      - Output -> req.url === '/' -> Home Directory
 */

/**
 * Day-3
 * Linux Permission Part(1,2)
 * Routing System
 */