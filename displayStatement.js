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
        this.currentDate = `${day}/${month}/${year}`;
        return this.currentDate;
    }

    addTransaction(transactionType, amount){
        let newTransaction
        if (transactionType === 'Deposit'){
            this.bankTransaction.deposit(amount)
            newTransaction = `${this.getCurrentDate()} || ${amount} || || ${this.bankTransaction.showBalance()}`
        } else if (transactionType === 'Withdraw'){
            this.bankTransaction.withdraw(amount)
            newTransaction = `${this.getCurrentDate()} || || ${amount} || ${this.bankTransaction.showBalance()}`
        } 
        this.statement.push(newTransaction);
    }

    printStatement(){
        return this.statement.join('\n')
    }
}

module.exports = DisplayStatement;