const expect = require('chai').expect;
const gamingService = require('../services/Gaming');

describe('Gaming service', async () => {
    it('should fetch all gaming statuses asynchronously', async () => {
        //act
        const gamingStatus = await gamingService.getGamingStatus();

        //assert
        expect(gamingStatus).to.not.be.null;
    });
});