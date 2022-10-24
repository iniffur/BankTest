const BankStatement = require('./bankStatement');

describe('Bank Statement', () => {
    it('Current balance is initialised at 0', () => {
        const bankStatement = new BankStatement();
        expect(bankStatement.showBalance()).toBe(0);
    });
});