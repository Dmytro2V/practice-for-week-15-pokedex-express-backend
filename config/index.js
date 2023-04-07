module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  dbFile: process.env.DB_FILE || 'db/dev.db'
  //db: {
    //username: process.env.DB_USERNAME,
    //password: process.env.DB_PASSWORD,
    //database: process.env.DB_DATABASE,
    //host: process.env.DB_HOST
   // dbFile: process.env.DB_FILE || 'db/dev.db'
  //}
};
