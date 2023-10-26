const mongoose = require('mongoose')

//definir el modelo para bootcamp

const BootcampSchema = mongoose.Schema({
    name:{
        type: String,
        unique: [true, "Nombre de bootcamp debe ser unico"],
        required: [true, "Nombre de bootcamp requerido"],
        maxlength: [50, "Longitud de nombre  menor a 50 caracteres"]
    },
    phone:{
        Type: Number,
        maxlength:  [10, "Longitud de numero  menor a 10 caracteres"]
    },
    address:{
        type: String,
        required: [true, "Nombre de bootcamp requerido"]
    },
    topics: {
        type: [String],
        enum: ["AI",
                "Frontend/UX",
                "Backned",
                "Devops"]
    },
    AverageRating: Number,
    CreatedAt: Date
})
 module.exports = mongoose.model('Bootcamp',BootcampSchema)