const expect = require('chai').expect;
const steamService = require('../services/Steam');

describe.skip('Steam service', async () => {
    it('should fetch Steam activity asynchronously', async () => {
        //act
        const steamActivity = await steamService.getActivity();

        //assert
        expect(steamActivity).to.not.be.null;
    });

    it('should fetch Steam status asynchronously', async () => {
        //act
        const steamStatus = await steamService.getStatus();

        //assert
        expect(steamStatus).to.not.be.null;
    });
});