const Xbox = require('node-xbox');
const xboxProfileID = '2533274843796559';

getActivity = async () => {
    return new Promise((fulfill, reject) => {
        const xbox = Xbox(process.env.XBOX_API_KEY);
        xbox.profile.activityRecent(xboxProfileID, (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                fulfill(data);
            }
        });
    });
};

getGamercard = async () => {
    return new Promise((fulfill, reject) => {
        const xbox = Xbox(process.env.XBOX_API_KEY);
        xbox.profile.gamercard(xboxProfileID, (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                fulfill(data);
            }
        });
    });
};

getStatus = async () => {
    return new Promise((fulfill, reject) => {
        const xbox = Xbox(process.env.XBOX_API_KEY);
        xbox.profile.presence(xboxProfileID, (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                fulfill(data);
            }
        });
    });
};

module.exports = {getActivity, getGamercard, getStatus};