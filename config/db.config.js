module.exports = {
  HOST: "zonenorth.net",
  USER: "task_test",
  PASSWORD: "pretzel-lovers",
  DB: "task_lander_test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
