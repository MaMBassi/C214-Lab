const { UserModel } = require('../infrastructure/database');

const UserRepository = {
    async create(data) {
        try {
            const model = new UserModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                genero: data.genero,
            };
            const options = { new: true };
            const filter = { nome: data.nome };
            const result = await UserModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await UserModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByGenero(data) {
        try {
            const result = await UserModel.findOne({ genero: data.genero }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await UserModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = UserRepository;