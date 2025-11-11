module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host:
    process.env.MYSQL_HOST || "bnr6sm98rouhlipau8i4-mysql.services.clever-cloud.com",
    user: process.env.MYSQL_USER || "u6suugjrymcluqdh",
    password: process.env.MYSQL_PASS || "ZxfmvW57RBQ6HfYUiprr",
    database: process.env.MYSQL_DB || "bnr6sm98rouhlipau8i4",
  },
};