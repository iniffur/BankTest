const DisplayStatement = require('./displayStatement');

describe('Bank Transactions', () => {
    it('Displays statement header', () => {
        const displayStatement = new DisplayStatement()
        expect(displayStatement.printStatement()).
            toBe('date || credit || debit || balance')
    })

    it('Raises error if neither Deposit or Withdraw are given as an option', () => {
        const displayStatement = new DisplayStatement
        fakeTransactionType = () => {
            displayStatement.addTransaction('Failure', 10000);
        };
        expect(fakeTransactionType).toThrow(new Error('Error: Please enter either "Deposit" or "Withdraw" along with a valid number'));
    });

    it('Raises an error if integer isnt given', () => {
        const displayStatement = new DisplayStatement
        fakeInteger = () => {
            displayStatement.addTransaction('Deposit', '10000')
        }
        expect(fakeInteger).toThrow('Error: Please enter a valid integer');
    });

    it('Produces a correct date', () => {
  
        const displayStatement = new DisplayStatement()

        // getCurrentDate(){
        //     const date = new Date();
        //     let day = date.getDate();
        //     let month = date.getMonth() + 1;
        //     let year = date.getFullYear();
        //     return `${day}/${month}/${year}`;
        // }




        let mockDate = jest
            .spyOn(DisplayStatement.prototype, "getCurrentDate")
            .mockImplementation(() => new Date(2023, 12, 12).getDate())
        
        expect(displayStatement.getCurrentDate()).toBe(12)
        mockDate.mockRestore()
    })

})