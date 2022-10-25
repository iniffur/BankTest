const DisplayStatement = require('./displayStatement');
const BankTransaction = require('./bankTransaction');

describe('Integration Test', () => {
    it('Adds a transaction to the statement', () => {
        const bankTransaction = new BankTransaction()
        const displayStatement = new DisplayStatement(bankTransaction)
        displayStatement.addTransaction('Deposit', 500)
        expect(displayStatement.printStatement()).
            toBe('date || credit || debit || balance\n25/10/2022 || 500 || || 500')
    })
})