const mongoose = require('mongoose');

const uri = `mongodb+srv://user:<password>@cluster0.u4vn0hv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarroSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    marca: String,
    modelo: String,
    combustivel: String,
    ano: String,
    cor: String
});

const CarroModel = mongoose.model('CarroModel', CarroSchema);

module.exports = {CarroModel,};
