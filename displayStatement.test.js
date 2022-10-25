const DisplayStatement = require('./displayStatement');

describe('Bank Transactions', () => {
    it('Displays statement header', () => {
        const displayStatement = new DisplayStatement()
        expect(displayStatement.printStatement()).
            toBe('date || credit || debit || balance')
    })

    it('Raises error if neither Deposit or Withdraw are given as an option', () => {
        const displayStatement = new DisplayStatement()
        expect(() => {
            displayStatement.addTransaction('Failure', 10000).
            toThrow('Error: Please enter either "Deposit" or "Withdraw" along with a valid number');
        })
    })

    it('Raises an error if integer isnt given', () => {
        const displayStatement = new DisplayStatement()
        expect(() => {
            displayStatement.addTransaction('Deposit', '10000').
            toThrow('Error: Please enter a valid integer');
        })
    })
})