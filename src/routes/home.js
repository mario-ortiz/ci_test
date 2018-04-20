const Users = require('./../models/users');

module.exports = (server) => {
    // Get a list of users
    server.get('/', (req, res) => {
        return res.send('At Home Multiple Deployments and health check');
    });

    server.get('/health', (req, res) => {
        return res.send('ok');
    });
}