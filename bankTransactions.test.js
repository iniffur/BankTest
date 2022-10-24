const BankTransactions = require('./bankTransactions');

describe('Bank Transactions', () => {
    it('Current balance is initialised at 0', () => {
        const bankTransactions = new BankTransactions();
        expect(bankTransactions.showBalance()).toBe(0);
    });

    it('Can deposit and withdraw', () => {
        const bankTransactions = new BankTransactions();
        bankTransactions.deposit(1500);
        bankTransactions.withdraw(500);
        expect(bankTransactions.showBalance()).toBe(1000);
    })

    it('Bank balance cannot be less than zero', () => {
        const bankTransactions = new BankTransactions();
        bankTransactions.deposit(500);
        expect(() => {
            bankTransactions.withdraw(1500)}).
            toThrow('Error: your bank balance cannot go below 0');
    })
});