import express from 'express';
import carRoutes from './src/routes/carRoutes';
import userRouter from './src/routes/userRouter';
// import 
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.use('/cars', carRoutes);
app.use('/', userRouter);
////////////////////////////////////
/*
Todo: car router


*/