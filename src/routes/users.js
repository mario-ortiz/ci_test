const Users = require('./../models/users');

module.exports = (server) => {
    const USERS_ROUTE = '/users';
    // Get a list of users
    server.get(USERS_ROUTE, (req, res) => {
        return Users
            .find()
            .then(users => {
                return res
                    .send({
                        status: 'ok',
                        payload: {
                            users
                        }
                    });
            })
            .catch(err => {
                return res
                    .send({
                        status: 'errpr',
                        payload: {
                            message: err.toString()
                        }
                    });
            });
    });

    // Get a user with the given Id
    server.get(USERS_ROUTE + '/:id', (req, res) => {
        const id = req.params.id;
        return Users
            .findById({
                _id: id
            })
            .then(user => {
                return res
                    .send({
                        status: 'ok',
                        payload: {
                            user
                        }
                    });
            })
            .catch(err => {
                return res
                    .send({
                        status: 'errpr',
                        payload: {
                            message: err.toString()
                        }
                    });
            });
    });

    server.post(USERS_ROUTE, (req, res) => {
        const { first_name, last_name, email } = req.body;
        if (!first_name || !last_name || !email) {
            return res
                    .send({
                        status: 'errpr',
                        payload: {
                            message: err.toString()
                        }
                    });
        }

        return Users
            .create({
                first_name,
                last_name,
                email
            })
            .then(user => {
                return res
                        .send({
                            status: 'ok',
                            payload: {
                                user
                            }
                        });
            })
            .catch(err => {
                return res
                    .send({
                        status: 'errpr',
                        payload: {
                            message: err.toString()
                        }
                    });
            });
    })

}