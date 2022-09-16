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

    async getByGenero(data) {
        try {
            const result = await UserModel.findOne({ genero: data.genero }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },
};

module.exports = UserRepository;