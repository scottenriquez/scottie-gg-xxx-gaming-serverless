const steamService = require('../services/Steam');
const xboxService = require('../services/Xbox');

getGamingStatus = async () => {
    return Promise.all([steamService.getStatus(), steamService.getActivity(), xboxService.getActivity(), xboxService.getStatus(), xboxService.getGamercard()]).then((results) => {
        return {
            steamStatus: results[0],
            steamActivity: results[1],
            xboxActivity: JSON.parse(results[2]),
            xboxStatus: JSON.parse(results[3]),
            xboxGamercard: JSON.parse(results[4])
        };
    });
};

module.exports = {getGamingStatus};