import * as mongoose from 'mongoose';

export let gestorSchema = new mongoose.Schema({
    efector: String,
    fecha: Date,
    categoria: {
        type: String,
        enum: ['rrhh', 'automotores', 'sien', 'd.g.p.a.', 'salud mental']
    },
    cantidad: Number,
    monto: Number,
    descripcion: String,
    detalle: String,
    expediente: String
});

export let gestor = mongoose.model('gestor', gestorSchema, 'gestor');