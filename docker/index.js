const http = require('http');
const server = http.createServer((request, response) => {
	response.end('Welcome to SCA Cloud School Application');
});
server.listen(1337);
