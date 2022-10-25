class DisplayStatement{
    constructor(bankTransaction){
        this.statement = []
        this.bankTransaction = bankTransaction;
    }

    getCurrentDate(){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    addTransaction(transactionType, amount){
        if (!Number.isInteger(amount) || amount < 0){
            throw new Error('Error: Please enter a valid integer');
        }

        let newTransaction
        if (transactionType === 'Deposit'){
            this.bankTransaction.deposit(amount)
            newTransaction = `${this.getCurrentDate()} || ${amount} || || ${this.bankTransaction.showBalance()}`
        } else if (transactionType === 'Withdraw'){
            this.bankTransaction.withdraw(amount)
            newTransaction = `${this.getCurrentDate()} || || ${amount} || ${this.bankTransaction.showBalance()}`
        } else {
            throw new Error('Error: Please enter either "Deposit" or "Withdraw" along with a valid number');
        }

        this.statement.unshift(newTransaction);
    }

    printStatement(){
        let statementHeader = 'date || credit || debit || balance';
        this.statement.unshift(statementHeader);
        let newStatement =  this.statement.join('\n')
        this.statement.splice(0, 1)
        return newStatement
    }
}

module.exports = DisplayStatement;