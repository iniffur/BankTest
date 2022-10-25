const DisplayStatement = require('./displayStatement');

describe('Bank Transactions', () => {
    it('Displays statement header', () => {
        const displayStatement = new DisplayStatement()
        expect(displayStatement.printStatement()).
            toBe('date || credit || debit || balance')
    })

    // it('Adds a transaction to the statement', () => {
    //     const displayStatement = new DisplayStatement()
    //     displayStatement.addTransaction('24/10/2022 || 1000 || || 1000')
    //     expect(displayStatement.printStatement()).
    //         toBe('date || credit || debit || balance\n24/10/2022 || 1000 || || 1000')
    // })

    // it('Returns the current date', () => {
    //     const displayStatement = new DisplayStatement()
    //     expect(displayStatement.getDate()).toBe('25/10/2022')
    // })
})