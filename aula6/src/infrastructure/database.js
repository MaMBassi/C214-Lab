const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.u4vn0hv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    diretor: String,
    duracao: String,
    genero: String
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};