const Steam = require('steam-web');
const steamProfileID = '76561198047527933';

getActivity = async () => {
    return new Promise((fulfill, reject) => {
        const steam = new Steam({
            apiKey: process.env.STEAM_API_KEY,
            format: 'json'
        });
        steam.getRecentlyPlayedGames({
            steamid: steamProfileID,
            callback: (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    fulfill(data.response);
                }
            }
        });
    });
};

getStatus = async () => {
    return new Promise((fulfill, reject) => {
        const steam = new Steam({
            apiKey: process.env.STEAM_API_KEY,
            format: 'json'
        });
        steam.getPlayerSummaries({
            steamids: [steamProfileID],
            callback: (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    fulfill(data.response);
                }
            }
        });
    });
};

module.exports = {getActivity, getStatus};