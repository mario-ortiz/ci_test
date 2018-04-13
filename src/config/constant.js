const constant = {
    yes: 1,
    no: 0,

    db: {
        user: process.env.MONGO_USER || '',
        password: process.env.MONGO_PASSWORD || ''
    },

    devprod() {
        if (process.env.NODE_ENV === 'production') {
            this.server_port = 3000;
        } else {
            this.server_port = 3000;
        }
    }
}

constant.devprod();

module.exports = constant;