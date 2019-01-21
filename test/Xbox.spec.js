const expect = require('chai').expect;
const xboxService = require('../services/Xbox');

describe.skip('Xbox service', async function() {
    it('should fetch Xbox activity asynchronously', async function() {
        //arrange
        this.timeout(10000);

        //act
        const xboxActivity = await xboxService.getActivity();

        //assert
        console.log(xboxActivity);
        expect(xboxActivity).to.not.be.null;
    });

    it('should fetch Xbox gamercard asynchronously', async function() {
        //arrange
        this.timeout(10000);

        //act
        const xboxGamercard = await xboxService.getGamercard();

        //assert
        console.log(xboxGamercard);
        expect(xboxGamercard).to.not.be.null;
    });

    it('should fetch Xbox status asynchronously', async function() {
        //arrange
        this.timeout(10000);

        //act
        const xboxStatus = await xboxService.getStatus();

        //assert
        console.log(xboxStatus);
        expect(xboxStatus).to.not.be.null;
    });
});