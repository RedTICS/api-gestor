import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as express from 'express';
import * as config from './config';

let requireDir = require('require-dir');

let app = express();

mongoose.connect(config.connectionStrings.mongoDB_main, { useNewUrlParser: true });
mongoose.connection.on('connected', function () {
    console.log('[Mongoose] Conexión OK');
});
mongoose.connection.on('error', function (err: any) {
    if (err)
        console.log('[Mongoose] No se pudo conectar al servidor');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.all('*', function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

    // Permitir que el método OPTIONS funcione sin autenticación
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
});

for (let m in config.modules) {
    if (config.modules[m].active) {
        let routes = requireDir(config.modules[m].path);
        for (let route in routes) {            
            app.use('/ges' + config.modules[m].route, routes[route]);
            console.log("Levanta: ", config.modules[m].route)            
        }
    }
}

app.listen(3002, function () {
    console.log('[API] Escuchando en http://localhost:/3002');
});

export = app;