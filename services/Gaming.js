const steamService = require('../services/Steam');
const xboxService = require('../services/Xbox');

getGamingStatus = async () => {
    Promise.all([steamService.getStatus(), steamService.getActivity(), xboxService.getActivity(), xboxService.getStatus(), xboxService.getGamercard()]).then((results) => {
        console.log(results);
    });
};

module.exports = {getGamingStatus};