const BankTransaction = require('./bankTransaction');

describe('Bank Transaction', () => {
    it('Current balance is initialised at 0', () => {
        const bankTransaction = new BankTransaction();
        expect(bankTransaction.showBalance()).toBe(0);
    });

    it('Can deposit and withdraw', () => {
        const bankTransaction = new BankTransaction();
        bankTransaction.deposit(1500);
        bankTransaction.withdraw(500);
        expect(bankTransaction.showBalance()).toBe(1000);
    });

    it('Bank balance cannot be less than zero', () => {
        const bankTransaction = new BankTransaction();
        bankTransaction.deposit(500);
        expect(() => {
            bankTransaction.withdraw(1500)}).
            toThrow('Error: your bank balance cannot go below 0');
    });
});