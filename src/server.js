require('dotenv').config();
const restify = require('restify');
const constant = require('./config/constant');
const port = process.env.PORT || constant.server_port;

const server = restify.createServer({
    name: 'Users API'
});

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

require('./config/db').connect();
require('./routes/users.js')(server);

server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
});