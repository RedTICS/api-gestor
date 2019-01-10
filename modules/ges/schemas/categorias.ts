import * as mongoose from 'mongoose';

export let categoriasSchema = new mongoose.Schema({
    nombre: String
});

export let categorias = mongoose.model('categorias', categoriasSchema, 'categorias');