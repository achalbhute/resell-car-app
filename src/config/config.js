module.exports = {
    development: {
        username: 'root',
        password: '',
        database: 'carsDB',
        host: 'localhost',
        dialect: 'mysql',
    },
    test: {
        dialect: "sqlite",
        storage: ":memory:"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
    },
    
        'secret': 'supersecret'
      
};
// module.exports = {
//     'secret': 'supersecret'
//   };