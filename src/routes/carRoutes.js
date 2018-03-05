const routes = (app) => {
    app.get('/', function(req, res, next) {
        res.locals.connection.query('SELECT * from Cars', function (error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        });
    });
    
    // .route('/contact')
    // .get((req, res) => 
    // res.send('Getting'))

//     .post((req, res) => 
//     res.send('posting'))
};

export default routes;