const http = require('http');
const path = require('path');
const url = require('url');
const readFile = require('util').promisify(require('fs').readFile);

const mimeTypes = {
  ['.html']: 'text/html',
  ['.htm']: 'text/html',
  ['.ico']: 'image/x-icon',
  ['.js']: 'text/javascript',
  ['.mjs']: 'text/javascript',
  ['.css']: 'text/css',
  ['.json']: 'application/json',
  ['.png']: 'image/png',
  ['.jpg']: 'image/jpg',
  ['.jpeg']: 'image/jpg',
  ['.xml']: 'application/xml'
};

const server = http.createServer((req, res) => {
  let filename = url.parse(req.url).pathname;
  if (filename[0] === '/') {
    filename = filename.slice(1);
  }
  filename = path.resolve(filename);
  readFile(filename)
    .then(data => {
      const contentType = mimeTypes[path.extname(filename)];
      if (contentType) {
        res.writeHead(200, { 'Content-Type': contentType });
      }
      else {
        res.writeHeader(200);
      }
      res.write(data);
      res.end();
    })
    .catch(err => {
      res.writeHead(404);
      res.end('404 Not Found');
    });
});
//démarre le serveur sur le port 8080
server.listen(8081);
console.log('server started on 8080');
