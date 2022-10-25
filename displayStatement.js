class DisplayStatement{
    constructor(bankTransaction){
        this.statementHeader = 'date || credit || debit || balance';
        this.statement = [this.statementHeader];
        this.bankTransaction = bankTransaction;
    }

    addTransaction(transaction){
        this.statement.push(transaction);
    }

    printStatement(){
        return this.statement.join('\n')
    }

    getDate(){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}/${month}/${year}`;
        return currentDate;
    }
}

module.exports = DisplayStatement;