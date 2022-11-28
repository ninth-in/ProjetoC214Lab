const User = require('../application/user_service');
const Product = require('../application/product_service');
const Utils = require('../utils/utils');

const userRoute = '/user';
const productRoute = '/product';

module.exports = (app) => {
    app.post(`${userRoute}/create`, async (req, res) => {
        const response = await User.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${userRoute}/update`, async (req, res) => {
        const response = await User.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${userRoute}/list`, async (req, res) => {
        const response = await User.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${userRoute}/listUser`, async (req, res) => {
        const response = await User.listByEmail(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${userRoute}/delete/:email`, async (req, res) => {
        const data = req.body;
        const { email } = req.params;
        data.email = email;
        const response = await User.delete(data);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.post(`${productRoute}/create`, async (req, res) => {
        req.body.totalPrice = req.body.price * req.body.quantitie;

        const response = await Product.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${productRoute}/update`, async (req, res) => {
        let data = await Product.listByDescription(req.body);

        if(req.body.weight !== undefined)
        {
            data.weight = req.body.weight;
        }
        if(req.body.quantitie !== undefined)
        {
            data.quantitie = req.body.quantitie;
        }
        if(req.body.price !== undefined)
        {
            data.price = req.body.price;
        }

        data.totalPrice = data.quantitie * data.price

        const response = await Product.update(data);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${productRoute}/list`, async (req, res) => {
        const response = await Product.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${productRoute}/listProduct`, async (req, res) => {
        const response = await Product.listByDescription(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${productRoute}/delete/:description`, async (req, res) => {
        const data = req.body;
        const { description } = req.params;
        data.description = description;
        const response = await Product.delete(data);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};