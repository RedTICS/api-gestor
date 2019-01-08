import * as express from 'express';
import { gestor } from './../schemas/gestor';

var router = express.Router();
router.post('/expediente', function (req, res, next) {
    let expediente = new gestor(req.body);
    expediente.save((err) => {
        if (err) {
            return next(err);
        }
        res.status(201).json(expediente);
    });
});

router.get('/gestor', function (req, res, next) {
    console.log("Entraaaaaa");
    let query = gestor.find({});

    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }

        res.json(data)
    });
});


export = router;