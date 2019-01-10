import * as express from 'express';
import * as organizacion from '../schemas/organizacion';

var router = express.Router();

router.get('/organizaciones', function (req, res, next) {
    let query = organizacion.model.find({});

    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }

        res.json(data)
    });
});

export = router;