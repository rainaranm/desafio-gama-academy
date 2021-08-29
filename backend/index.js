const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');
require ('dotenv');
// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic);



mongoose.connect(`mongodb+srv://${process.env.USER}@cluster0.p0f1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
});



//  app.use("/style.css", express.static(__dirname + '../frontend/style.css'));
//  app.use("/script.js", express.static(__dirname + '../frontend/script.js'));
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('2002', () => {
    console.log('rodando na porta 2002')});