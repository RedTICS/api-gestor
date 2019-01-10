import * as express from 'express';
import * as categoria from '../schemas/categorias';

var router = express.Router();

router.get('/categorias', function (req, res, next) {    
    let query = categoria.categorias.find({});

    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }

        res.json(data)
    });
});

export = router;