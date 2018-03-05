import express from 'express';
import routes from './src/routes/carRoutes';

// import 
const app = express();
const PORT = 3000;
routes(app);

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : ' ',
		database : 'carsDB'
	});
	res.locals.connect();
	next();
});

// con.connect(function(err){
//     if(err) throw err;
//     console.log("Connected");
// });



app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);