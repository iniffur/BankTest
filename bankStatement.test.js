const BankStatement = require('./bankStatement');

describe('Bank Statement', () => {
    it('Current balance is initialised at 0', () => {
        const bankStatement = new BankStatement();
        expect(bankStatement.showBalance()).toBe(0);
    });

    it('Can deposit and withdraw', () => {
        const bankStatement = new BankStatement();
        bankStatement.deposit(1500);
        bankStatement.withdraw(500);
        expect(bankStatement.showBalance()).toBe(1000);
    })

    it('Bank balance cannot be less than zero', () => {
        const bankStatement = new BankStatement();
        bankStatement.deposit(500);
        expect(() => {
            bankStatement.withdraw(1500)}).
            toThrow('Error: your bank balance cannot go below 0');
    })
});