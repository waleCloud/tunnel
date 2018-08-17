require('dotenv').config();

module.exports = {
   development : {
     username : 'root',
     password : 'password',
     database : 'tunnel_test',
     host : 'localhost',
     dialect : 'postgres',
  },
   test : {
    username : process.env.TEST_DBUSER,
    password : process.env.TEST_DBPASSWORD,
    database : process.env.TEST_DBNAME,
    host : process.env.TEST_DBHOST,
    dialect : process.env.DIALECT,
  },
   production : {
    username : process.env.PROD_DBUSER,
    password : process.env.PROD_DBPASSWORD,
    database : process.env.PROD_DBNAME,
    host : process.env.PROD_DBHOST,
    dialect : process.env.DIALECT,
  },
};
