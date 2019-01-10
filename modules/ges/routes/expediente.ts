import * as express from 'express';
import { expediente } from './../schemas/expediente';

var router = express.Router();
router.post('/expediente', function (req, res, next) {
    let expedienteNuevo = new expediente(req.body);
    expedienteNuevo.save((err, expediente) => {
        if (err) {
            return next(err);
        }
        res.json(expediente);
    });
});

router.get('/expedientes', function (req, res, next) {    
    let query = expediente.find({});

    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }

        res.json(data)
    });
});


export = router;