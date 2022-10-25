class DisplayStatement{
    constructor(bankTransaction){
        this.statementHeader = 'date || credit || debit || balance';
        this.statement = [this.statementHeader];
        this.bankTransaction = bankTransaction;
    }

    getCurrentDate(){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}/${month}/${year}`;
        return currentDate;
    }

    addTransaction(transactionType, amount){
        let newTransaction
        if (transactionType === 'Deposit'){
            this.bankTransaction.deposit(amount)
            newTransaction = `${this.getCurrentDate()} || ${amount} || || ${this.bankTransaction.showBalance()}`
        } else if (transactionType === 'Withdraw'){
            this.bankTransaction.withdraw(amount)
            newTransaction = `${this.getCurrentDate()} || || ${amount} || ${this.bankTransaction.showBalance()}`
        } else {
            throw new Error('Error: Please enter either "Deposit" or "Withdraw" along with a valid number')
        }

        if (!Number.isInteger(amount)){
            throw new Error('Error: Please enter a valid integer')
        }

        this.statement.push(newTransaction);
    }

    printStatement(){
        return this.statement.join('\n')
    }
}

module.exports = DisplayStatement;