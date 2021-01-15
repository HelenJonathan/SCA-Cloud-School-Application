const http = require('http');
const server = http.createServer((request, response) => {
	response.end('Welcome to SCA Cloud School Application, this is my first assessment');
});
server.listen(1337);
