const User = require('../application/user_service');
const Utils = require('../utils/utils');

const route = '/user';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await User.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    
    app.patch(`${route}/listMovie`, async (req, res) => {
        const response = await User.listByGenero(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};