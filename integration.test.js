const DisplayStatement = require('./displayStatement');
const BankTransaction = require('./bankTransaction');

describe('Integration Test', () => {
    it('Adds a transaction to the statement', () => {
        const bankTransaction = new BankTransaction()
        const displayStatement = new DisplayStatement(bankTransaction)
        let mockDate = jest
            .spyOn(DisplayStatement.prototype, 'getCurrentDate')
            .mockReturnValueOnce('25/10/2022')

        displayStatement.addTransaction('Deposit', 500)
        expect(displayStatement.printStatement()).
            toEqual('date || credit || debit || balance\n' + 
            '25/10/2022 || 500 || || 500')
        
        mockDate.mockRestore();
    });

    it('Allows a withdraw transaction if balance is greater than withdraw amount', () => {
        const bankTransaction = new BankTransaction()
        const displayStatement = new DisplayStatement(bankTransaction)

        let mockDate = jest
        .spyOn(DisplayStatement.prototype, 'getCurrentDate')
        .mockReturnValueOnce('22/10/2022')
        .mockReturnValueOnce('23/10/2022')

        displayStatement.addTransaction('Deposit', 500)  
        displayStatement.addTransaction('Withdraw', 200)
        expect(displayStatement.printStatement()).
        toBe('date || credit || debit || balance' + 
        '\n23/10/2022 || || 200 || 300' +
        '\n22/10/2022 || 500 || || 500') 

        mockDate.mockRestore();
    });

});