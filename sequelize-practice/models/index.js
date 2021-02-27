const Sequelize = require("sequelize");
const fs        = require("fs");
const path      = require("path");

const env       = process.env.NODE_ENV || "development";
const config    = require("../config/config.js")[env];
const basename  = path.basename(__filename);
const db        = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize    = sequelize;

fs
.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model] = model;
    model.init(sequelize);
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;

//TODO 테이블 연결하는거 for문으로 처리하자. 그게 확장성 부분에서 나을거같다. 