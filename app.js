// make a web server
const http = require('http');
const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write("Page Not Found")
        } else {
            res.write(data)
        }
        res.end();
    })
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const url = req.url;

    switch (url) {
        case '/' || '/angka5web' || '/angka5web/home':
            renderHTML('./index.html', res);
            break;
        case '/angka5web/about':
            renderHTML('./about/index.html', res);
            break;
        case '/angka5web/gallery':
            renderHTML('./gallery/index.html', res);
            break;
        default:
            res.writeHead(404)
            res.write("Page Not Found")
            break;
    }

    console.log(req.url);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});