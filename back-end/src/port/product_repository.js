const { ProductModel } = require('../infrastructure/database');

const ProductRepository = {
    async create(data) {
        try {
            const model = new ProductModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
                weight:  data.weight,
                quantitie: data.quantitie,
                price: data.price,
                totalPrice: data.totalPrice,
            };
            const options = { new: true };
            const filter = { description: data.description };
            const result = await ProductModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await ProductModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByDescription(data) {
        try {
            const result = await ProductModel.findOne({ description: data.description }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await ProductModel.deleteOne({ description: data.description }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = ProductRepository;