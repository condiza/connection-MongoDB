import { Schema, model } from "mongoose";

const productoEsquema = new Schema(

    {
        nombre:{
            type: String,
            required: true,
            unique: true,
            trim: true //trim nos ayuda a eliminar los espacios en una cadena de texto u/o caracteres que no necesitamos
        },
        descripcion:{
            type: String,
            required: true
        },
        precio:{
            type: String,
            required: true
        },
        opcion:{
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true, //muestra fecha y hora
        versionKey: false //para no genrar la lave que se genera automaticamente
    }
);

export default model('productos', productoEsquema);
