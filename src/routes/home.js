const Users = require('./../models/users');

module.exports = (server) => {
    const HOME_ROUTE = '/';
    // Get a list of users
    server.get(HOME_ROUTE, (req, res) => {
        return res.send('At Home Multiple Deployments');
    });
}