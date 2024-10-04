const userModel = require('../models/userModel');

function authenticateApiKey(req, res, next) {
    const apiKey = req.headers['api-key'];

    if (!apiKey) {
        return res.status(403).json({ code: 403, message: 'API Key Not Found' });
    }

    const user = userModel.getUserByApiKey(apiKey);
    if (!user) {
        return res.status(403).json({ code: 403, message: 'Invalid API Key' });
    }

    req.user = user;
    next();
}

module.exports = authenticateApiKey;
