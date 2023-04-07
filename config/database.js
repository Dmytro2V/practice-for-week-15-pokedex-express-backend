const config = require("./index");

//const db = config.db;
//const username = db.username;
//const password = db.password;
//const database = db.database;
//const host = db.host;

module.exports = {// switching from postgress to sqlite
  development: {
    storage: config.dbFile,
    //username,
    //password,
    //database,
  //  host,
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    seederStorage: "sequelize",
  },
};
