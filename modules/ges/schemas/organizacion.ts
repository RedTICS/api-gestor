import * as mongoose from 'mongoose';
import * as direccionSchema from './direccion';

let codigoSchema = new mongoose.Schema({
    sisa: {
        type: String,
        required: true
    },
    cuie: String,
    remediar: String,
    sips: String
});

let _schema = new mongoose.Schema({
    codigo: { type: codigoSchema },
    nombre: String,    
    direccion: { type: direccionSchema },    
    nivelComplejidad: Number,
    activo: {
        type: Boolean,
        required: true,
        default: true
    },
    fechaAlta: Date,
    fechaBaja: Date    
});

export let schema = _schema;
export let model = mongoose.model('organizacion', _schema, 'organizacion');
