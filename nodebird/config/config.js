const dotenv = require("dotenv");
const path = require("path");

dotenv.config(path.join(__dirname, "../.env"));

module.exports = {
    "development": {
        "username": "root",
        "password": process.env.DB_PASSWORD,
        "database": "nodebird",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
