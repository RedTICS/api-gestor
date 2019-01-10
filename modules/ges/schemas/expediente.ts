import * as mongoose from 'mongoose';
// import { constantes } from './../../../utils/constantes';

export let expedienteSchema = new mongoose.Schema({
    efector: String,
    fecha: Date,
    categoria: String,    
    cantidad: Number,
    monto: Number,
    descripcion: String,
    detalle: String,
    expediente: String
});

export let expediente = mongoose.model('expediente', expedienteSchema, 'expediente');