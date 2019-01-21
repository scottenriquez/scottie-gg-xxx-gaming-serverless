const gamingService = require('./services/Gaming');

exports.handler = async (event) => {
    return await gamingService.getGamingStatus();
};