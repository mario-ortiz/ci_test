const mongoose = require('mongoose');
const constant = require('./constant')

module.exports = {
    connect: () => {
        return mongoose.connect(`mongodb://${constant.db.user}:${constant.db.password}@ds219098.mlab.com:19098/microservice_test`);
    }
}