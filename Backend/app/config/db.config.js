const db_host = process.env.DB_HOST;
const db_pw = process.env.DB_PW;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_port = process.env.DB_PORT;

module.exports = {
  HOST: db_host,
  USER: db_user,
  PASSWORD: db_pw,
  PORT: db_port,
  DB: db_name,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
